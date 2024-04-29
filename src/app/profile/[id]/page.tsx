

const useProfile = ({params}: any) => {
    return (
          <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
              <h1 className="mb-10">Profile</h1>
              <hr />
          <p className="text-3xl">Profile page <span className="p-2 ml-2 rounded-xl bg-orange-500 text-black">{params.id}</span></p>
              
              </div>
    )
  }
  
  export default useProfile