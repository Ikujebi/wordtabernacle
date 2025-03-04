"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaEye, FaTrashAlt } from "react-icons/fa"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

interface Appointment {
  _id: string
  guestName: string
  appointmentTime: string
  hostName: string
  status: "pending" | "accepted" | "canceled"
}

function HostDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState<Appointment[]>([])
  const [rescheduleData, setRescheduleData] = useState<{ appointmentId: string; newAppointmentTime: string } | null>(
    null
  )

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Token is missing from localStorage.")

      const response = await axios.get<{ appointments: Appointment[] }>("http://localhost:4444/api/hosts/appointments", {
        headers: { Authorization: `Bearer ${token}` },
      })

      setAppointments(response.data.appointments)
      setFilteredData(response.data.appointments)
      setError(null)
    } catch (error) {
      handleError(error)
    }
  }

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      setError(error.response?.data?.message || error.message)
    } else if (error instanceof Error) {
      setError(error.message)
    } else {
      setError("An unknown error occurred.")
    }
  }

  const handleAccept = async (id: string) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Token is missing from localStorage.")

      await axios.put(`http://localhost:4444/api/hosts/appointments/${id}/accept`, {}, { headers: { Authorization: `Bearer ${token}` } })
      fetchAppointments()
    } catch (error) {
      handleError(error)
    }
  }

  const handleCancel = async (id: string) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Token is missing from localStorage.")

      await axios.delete(`http://localhost:4444/api/hosts/appointments/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      fetchAppointments()
    } catch (error) {
      handleError(error)
    }
  }

  const handleReschedule = async (id: string) => {
    if (!rescheduleData || rescheduleData.appointmentId !== id) return

    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Token is missing from localStorage.")

      await axios.put(
        `http://localhost:4444/api/hosts/appointments/${id}/reschedule`,
        { appointmentTime: rescheduleData.newAppointmentTime },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      fetchAppointments()
      setRescheduleData(null)
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(() => {
    const filtered = appointments.filter((appointment) =>
      appointment.guestName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filtered)
  }, [searchTerm, appointments])

  return (
    <div className="flex justify-start">
      <div className="shadow-xl flex bg-white rounded-lg w-full md:w-[47.5rem] px-[2%] flex-col">
        <h2 className="font-semibold text-lg">Guests Log</h2>
        <input
          type="text"
          placeholder="Search"
          className="pl-8 pr-2 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 w-[9rem]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th>Guest</th>
              <th>Host</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((appointment) => (
              <>
                <tr key={appointment._id}>
                  <td>{appointment.guestName}</td>
                  <td>{appointment.hostName}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>
                    <button className="bg-green-400 rounded-md p-1" onClick={() => handleAccept(appointment._id)}>Accept</button>
                    <button className="bg-red-400 rounded-md p-1 ml-2" onClick={() => handleCancel(appointment._id)}>Cancel</button>
                    <button className="bg-blue-400 rounded-md p-1 ml-2" onClick={() => setRescheduleData({ appointmentId: appointment._id, newAppointmentTime: appointment.appointmentTime })}>Reschedule</button>
                  </td>
                </tr>
                {rescheduleData?.appointmentId === appointment._id && (
                  <tr>
                    <td colSpan={4} className="p-4">
                      <input
                        type="datetime-local"
                        value={rescheduleData.newAppointmentTime}
                        onChange={(e) => setRescheduleData({ ...rescheduleData, newAppointmentTime: e.target.value })}
                        className="px-2 py-1 border rounded-md"
                      />
                      <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md" onClick={() => handleReschedule(appointment._id)}>Confirm</button>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HostDashboard
