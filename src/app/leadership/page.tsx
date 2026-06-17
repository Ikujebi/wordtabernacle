"use client";

import { FC, useState } from "react";
import { Form, Input, Select, Button, message, Divider } from "antd";
import { HiAcademicCap, HiCalendarDays, HiUserGroup, HiCheckCircle } from "react-icons/hi2";

const { TextArea } = Input;

interface LeadershipFormValues {
    fullName: string;
    email: string;
    phone: string;
    membershipDuration: string;
    servingArea: string;
    reason: string;
}

const LeadershipClassPage: FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onFinish = async (values: LeadershipFormValues) => {
        setLoading(true);
        try {
            // Simulate API submit
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Application Submitted: ", values);

            message.success("Your leadership application has been submitted successfully!");
            form.resetFields();
        } catch (error) {
            message.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50/50 pb-12 pt-[10rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Class Info & Highlights */}
                <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100 uppercase tracking-wider mb-4">
                            Ministry Development
                        </span>
                        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight leading-none mb-4">
                            Wordtabanacle Leadership Academy
                        </h1>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md">
                            Step into your divine calling. This intensive training pathway equips emerging leaders with theological foundations, character alignment, and practical ministry skills.
                        </p>
                    </div>

                    <Divider className="border-zinc-200/60 my-2" />

                    {/* Quick Perks / Info Stack */}
                    <div className="space-y-4">
                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 text-rose-400 shrink-0">
                                <HiCalendarDays className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">6-Week Cohort</h4>
                                <p className="text-zinc-500 text-xs font-medium">Sunday afternoons starting Soon</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 border border-zinc-100 shrink-0">
                                <HiAcademicCap className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">Core Tracks</h4>
                                <p className="text-zinc-500 text-xs font-medium">Servant leadership, church health, &amp; team building</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 border border-zinc-100 shrink-0">
                                <HiUserGroup className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">Mentorship</h4>
                                <p className="text-zinc-500 text-xs font-medium">Direct processing sessions with pastoral staff</p>
                            </div>
                        </div>
                    </div>

                    {/* Guidelines Banner */}
                    <div className="p-4 bg-zinc-900 text-white rounded-2xl space-y-2 shadow-inner">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
                            <HiCheckCircle className="text-base" /> Prerequisites
                        </div>
                        <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                            Applicants must have served as church workers for a minimum of six months and be currently serving in unit.            </p>
                    </div>
                </div>

                {/* Right Column: Application Form Card */}
                <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-xl font-extrabold text-zinc-900">Application Intake</h2>
                        <p className="text-zinc-400 text-xs font-medium">Please fulfill all fields thoroughly. Applications close August 30th.</p>
                    </div>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider ">Full Name</span>}
                                name="fullName"
                                rules={[{ required: true, message: "Please input your full name" }]}
                            >
                                <Input placeholder="John Doe" className="h-10 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 hover:border-transparent" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Email Address</span>}
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email" },
                                    { type: "email", message: "Please enter a valid email address" }
                                ]}
                            >
                                <Input placeholder="johndoe@example.com" className="h-10 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 hover:border-transparent" />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Phone Number</span>}
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number" }]}
                            >
                                <Input placeholder="+ (234) 000-0000" className="h-10 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 hover:border-transparent" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Length of Service in the Workforce</span>}
                                name="membershipDuration"
                                rules={[{ required: true, message: "Please select an option" }]}
                            >
                                <Select placeholder="Select period" className="h-10 rounded-xl hover:border-transparent" popupClassName="rounded-xl">
                                    <Select.Option value="less_than_6m">Less than 6 Months</Select.Option>
                                    <Select.Option value="6m_to_1y">6 Months to 1 Year</Select.Option>
                                    <Select.Option value="1y_to_3y">1 to 3 Years</Select.Option>
                                    <Select.Option value="greater_than_3y">Greater than 3 Years</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <Form.Item
                            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Current Ministry / Serving Area</span>}
                            name="servingArea"
                            rules={[{ required: true, message: "Please specify your ministry team" }]}
                        >
                            <Input placeholder="e.g., Usheing, Media, Worship, None yet" className="h-10 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 hover:border-transparent" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Why are you seeking to join the Leadership Track?</span>}
                            name="reason"
                            rules={[{ required: true, message: "Please share a brief motivation statement" }]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Share your goals and how you look to contribute to church growth..."
                                className="rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 hover:border-transparent"
                            />
                        </Form.Item>

                        <Form.Item className="pt-2 mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    backgroundColor: isHovered ? "#ef4444" : "#18181b",
                                }}
                                className="w-full h-12   border-none text-white font-bold rounded-xl tracking-wide uppercase text-xs transition-colors duration-200"
                            >
                                Submit Application
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default LeadershipClassPage;