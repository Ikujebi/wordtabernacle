"use client";

import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Button, message, Divider } from "antd";
import { HiAcademicCap, HiUser, HiEnvelope, HiPhone, HiChatBubbleLeftRight } from "react-icons/hi2";

const { Option } = Select;
const { TextArea } = Input;

interface ApplicationFormValues {
  fullName: string;
  email: string;
  phone: string;
  membershipStatus: string;
  currentMinistry: string;
  reasonForApplying: string;
  agreement: boolean;
}

const LeadershipApplicationForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: ApplicationFormValues) => {
    setLoading(true);
    try {
      // Replace this block with your actual API endpoint submission logic
      // e.g., await fetch('/api/leadership-apply', { method: 'POST', body: JSON.stringify(values) });
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API latency
      
      message.success("Application submitted successfully! Our team will contact you shortly.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to submit application. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4 md:px-0 mt-[10rem]">
      {/* Header Info Section */}
      <div className="bg-zinc-950 text-white rounded-3xl p-6 md:p-10 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-rose-500/10 blur-3xl rounded-full" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/20">
            <HiAcademicCap className="text-xl" />
          </div>
          <span className="text-xs font-black tracking-wider uppercase text-rose-400">Advanced Ministry</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-zinc-50">
          Kingdom Leadership Cohort
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
          Equipping believers with theological foundations, operational management skills, and spiritual disciplines required to shepherd teams and pioneer local ministries effectively.
        </p>
      </div>

      {/* Main Form Container */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900 mb-1">Candidacy Registration</h2>
        <p className="text-xs text-zinc-500 mb-6">Please provide accurate background insights to help us assess your cohort placement.</p>
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="space-y-4"
        >
          {/* Section: Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <Form.Item
              name="fullName"
              label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Full Name</span>}
              rules={[{ required: true, message: "Please input your full legal name" }]}
            >
              <Input 
                prefix={<HiUser className="text-zinc-400 mr-1" />} 
                placeholder="John Doe" 
                className="rounded-xl h-11 border-zinc-200 focus:border-zinc-900"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Email Address</span>}
              rules={[
                { required: true, message: "Please input your email address" },
                { type: "email", message: "Please enter a valid email profile" }
              ]}
            >
              <Input 
                prefix={<HiEnvelope className="text-zinc-400 mr-1" />} 
                placeholder="johndoe@example.com" 
                className="rounded-xl h-11 border-zinc-200"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <Form.Item
              name="phone"
              label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Phone Number</span>}
              rules={[{ required: true, message: "Please input your contact phone number" }]}
            >
              <Input 
                prefix={<HiPhone className="text-zinc-400 mr-1" />} 
                placeholder="+1 (555) 000-0000" 
                className="rounded-xl h-11 border-zinc-200"
              />
            </Form.Item>

            <Form.Item
              name="membershipStatus"
              label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Church Membership Duration</span>}
              rules={[{ required: true, message: "Please select your membership lifecycle status" }]}
            >
              <Select placeholder="Select option" className="rounded-xl h-11 border-zinc-200 custom-antd-select">
                <Option value="less-than-1">Less than 1 year</Option>
                <Option value="1-3">1 to 3 years</Option>
                <Option value="3-plus">Greater than 3 years</Option>
                <Option value="non-member">Regular Visitor / Non-Member</Option>
              </Select>
            </Form.Item>
          </div>

          <Divider className="my-6 border-zinc-100" />

          {/* Section: Ministry Profiles */}
          <Form.Item
            name="currentMinistry"
            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Current Ministry Involvement</span>}
            rules={[{ required: true, message: "Please specify your active ministry group or select None" }]}
          >
            <Input 
              prefix={<HiChatBubbleLeftRight className="text-zinc-400 mr-1" />} 
              placeholder="e.g., Media Team, Ushering, Youth Department, None" 
              className="rounded-xl h-11 border-zinc-200"
            />
          </Form.Item>

          <Form.Item
            name="reasonForApplying"
            label={<span className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Statement of Leadership Intent</span>}
            rules={[
              { required: true, message: "Please share what drives your application" },
              { min: 20, message: "Please provide a brief summary of at least 20 characters" }
            ]}
          >
            <TextArea 
              rows={4} 
              placeholder="Briefly share why you feel called to this leadership development track and what your service expectations are..." 
              className="rounded-xl border-zinc-200 p-3"
            />
          </Form.Item>

          {/* Section: Agreement */}
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error("You must commit to the course attendance parameters")),
              },
            ]}
            className="pt-2"
          >
            <Checkbox className="text-zinc-600 text-xs font-medium alignment-fix">
              I commit to completing the mandatory 6-week modules, structural assignments, and attending weekly collaborative strategy assemblies.
            </Checkbox>
          </Form.Item>

          {/* Action Button */}
          <Form.Item className="mb-0 pt-4">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full md:w-auto md:px-8 h-12 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm tracking-wide border-none transition-colors duration-200 shadow-sm"
            >
              Submit Cohort Application
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Global CSS adjustment for Antd Select height matching inside custom classes */}
      <style jsx global>{`
        .custom-antd-select .ant-select-selector {
          border-radius: 12px !important;
          height: 44px !important;
          padding: 6px 12px !important;
          border-color: #e4e4e7 !important;
        }
        .alignment-fix .ant-checkbox {
          top: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default LeadershipApplicationForm;