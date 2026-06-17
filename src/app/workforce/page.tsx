"use client";

import { FC, useState } from "react";
import { Form, Input, Select, Button, message, Divider } from "antd";
import { HiUserPlus, HiClock, HiHeart, HiCheckCircle } from "react-icons/hi2";

const { TextArea } = Input;

// Predefined list of ministry departments/units for type-filtering selection
const MINISTRY_UNITS = [
    { value: "ushering", label: "Ushering & Protocols" },
    { value: "prayer", label: "Prayer" },
    { value: "media_tech", label: "Media & Technical (Sound/Video)" },
    { value: "worship_choir", label: "Worship Team / Choir" },
    { value: "hospitality", label: "Hospitality & Greeters" },
    { value: "children_ministry", label: "Children's Church Teacher/Helper" },
    { value: "security_traffic", label: "Security & Traffic Control" },
    { value: "prayer_intercessors", label: "Prayer & Intercessory Unit" },
    { value: "evangelism_outreach", label: "Evangelism & Community Outreach" },
    { value: "medical_firstaid", label: "Medical & First Aid Team" },
    { value: "decor_ambience", label: "Sanctuary Design & Decoration" },
    { value: "sanctuary", label: "Sanctuary" },
    { value: "repair", label: "Repair & Maintainance" },
];

interface WorkforceFormValues {
    fullName: string;
    email: string;
    phone: string;
    membershipDuration: string;
    preferredUnits: string[];
    reason: string;
}

const WorkforceJoinPage: FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onFinish = async (values: WorkforceFormValues) => {
        setLoading(true);
        try {
            // Simulate API submit
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Workforce Application Submitted: ", values);

            message.success("Your workforce application has been submitted successfully!");
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

                {/* Left Column: Workforce Info & Highlights */}
                <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100 uppercase tracking-wider mb-4">
                            Join The Workforce
                        </span>
                        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
                            Wordtabanacle Church Workforce
                        </h1>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md">
                            Discover the joy of local church stewardship. Become a vital part of our operational teams to deploy your unique spiritual gifts, talents, and service to cultivate community growth.
                        </p>
                    </div>

                    <Divider className="border-zinc-200/60 my-2" />

                    {/* Quick Perks / Info Stack */}
                    <div className="space-y-4">
                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 text-rose-400 shrink-0 shadow-sm">
                                <HiHeart className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">Diverse Departments</h4>
                                <p className="text-zinc-500 text-xs font-medium">Media, Ushering, Hospitality, Worship &amp; more</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 border border-zinc-100 shrink-0 shadow-sm">
                                <HiClock className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">Flexible Serve Schedules</h4>
                                <p className="text-zinc-500 text-xs font-medium">Rotational assignments matching your weekly flow</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 border border-zinc-100 shrink-0 shadow-sm">
                                <HiUserPlus className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-zinc-900 text-xs font-black uppercase tracking-wider">Community Bonding</h4>
                                <p className="text-zinc-500 text-xs font-medium">Build genuine relationships while serving side-by-side</p>
                            </div>
                        </div>
                    </div>

                    {/* Guidelines Banner */}
                    <div className="p-4 bg-zinc-900 text-white rounded-2xl space-y-2 shadow-xl border border-zinc-800">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
                            <HiCheckCircle className="text-base" /> Prerequisites
                        </div>
                        <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                            Applicants must complete the basic membership orientation track or be a regular attendee looking to integrate officially.
                        </p>
                    </div>
                </div>

                {/* Right Column: Application Form Card */}
                <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-xl font-extrabold text-zinc-900">Workforce Intake</h2>
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
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Full Name</span>}
                                name="fullName"
                                rules={[{ required: true, message: "Please input your full name" }]}
                            >
                                <Input placeholder="John Doe" className="h-11 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 text-sm hover:border-zinc-200" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Email Address</span>}
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email" },
                                    { type: "email", message: "Please enter a valid email address" }
                                ]}
                            >
                                <Input placeholder="johndoe@example.com" className="h-11 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 text-sm hover:border-zinc-200" />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Phone Number</span>}
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number" }]}
                            >
                                <Input placeholder="+ (234) 000-0000" className="h-11 rounded-xl border-zinc-200 focus:border-zinc-900 focus:ring-0 text-sm hover:border-zinc-200" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Length of Attendance at Wordtabanacle</span>}
                                name="membershipDuration"
                                rules={[{ required: true, message: "Please select an option" }]}
                            >
                                <Select placeholder="Select period" className="h-11 rounded-xl custom-select-height hover:border-zinc-200" popupClassName="rounded-xl overflow-hidden p-1 text-sm">
                                    <Select.Option value="less_than_3m">Less than 3 Months</Select.Option>
                                    <Select.Option value="3m_to_6m">3 to 6 Months</Select.Option>
                                    <Select.Option value="6m_to_1y">6 Months to 1 Year</Select.Option>
                                    <Select.Option value="greater_than_1y">Greater than 1 Year</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                        {/* Searchable and Filterable Multi-Select Component */}
                        <Form.Item
                            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Preferred Ministry Departments (Select up to 2)</span>}
                            name="preferredUnits"
                            rules={[{ required: true, message: "Please choose at least one area you are interested in serving" }]}
                        >
                            <Select
                                mode="multiple"
                                showSearch
                                maxCount={2}
                                placeholder="Type to filter departments... (e.g. Media, Ushering)"
                                optionFilterProp="label"
                                options={MINISTRY_UNITS}
                                className="min-h-11 rounded-xl custom-select-height hover:border-zinc-200 text-sm hover:border-zinc-200"
                                popupClassName="rounded-xl overflow-hidden p-1 text-sm"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Why are you seeking to join the Workforce?</span>}
                            name="reason"
                            rules={[{ required: true, message: "Please share a brief motivation statement" }]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Share your goals and how you look to contribute to church growth..."
                                className="rounded-xl border-zinc-200 p-3 focus:border-zinc-900 focus:ring-0 text-sm hover:border-zinc-200"
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
                                className="w-full h-12 border-none text-white font-bold rounded-xl tracking-wider uppercase text-xs transition-all duration-200 shadow-sm"
                            >
                                Submit Application
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
<style jsx global>{`
                .custom-select-height .ant-select-selector {
                    border-radius: 12px !important;
                    min-height: 44px !important;
                    padding: 4px 12px !important;
                    border-color: #e4e4e7 !important;
                    box-shadow: none !important;
                    display: flex !important;
                    align-items: center !important;
                }
                .custom-select-height .ant-select-selection-overflow {
                    display: flex !important;
                    align-items: center !important;
                    gap: 4px !important;
                }
                .custom-select-height .ant-select-selection-item {
                    background-color: #f4f4f5 !important;
                    border: 1px solid #e4e4e7 !important;
                    border-radius: 6px !important;
                    margin-inline-end: 0px !important;
                    font-size: 0.8125rem !important;
                    color: #18181b !important;
                }
                .custom-select-height .ant-select-selection-item-content {
                    font-weight: 500 !important;
                }
                .custom-select-height .ant-select-selection-placeholder {
                    font-size: 0.875rem !important;
                }
            `}</style>
         
        </div>
    );
};

export default WorkforceJoinPage;