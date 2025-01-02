import { Form, Button, Input, Radio } from "antd";
import { useState } from "react";

export default function CreateJob() {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState("");
  const onChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  const { TextArea } = Input;

  return (
    <Form
      name="wrap"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      className="!w-3/4 mx-auto text-base mt-16"
      requiredMark={(label, info) => {
        return (
          <div>
            {label}
            {info.required ? <span className="text-red-600">*</span> : ""}
          </div>
        );
      }}
      onFinish={(value: any) => {
        console.log("yo", value);
      }}
      form={form}
      autoComplete="off"
    >
      <Form.Item
        label="Job Title"
        name="role"
        rules={[
          {
            required: true,
            message: "Job title is required",
            whitespace: true,
          },
        ]}
      >
        <Input className="text-base" />
      </Form.Item>

      <Form.Item
        label="Slug"
        name="slug"
        rules={[
          {
            required: true,
            message: "Slug is required",
            whitespace: true,
          },
        ]}
      >
        <Input className="text-base" />
      </Form.Item>

      <div className="flex mb-6">
        <div className="w-1/2">
          <Form.Item
            label="Job Type"
            name="jobType"
            rules={[{ required: true, message: "Select a Job type" }]}
          >
            <Radio.Group
              onChange={onChange}
              value={radioValue}
              className="text-base"
            >
              <Radio value={"Onsite"}>Onsite</Radio>
              <Radio value={"Hybrid"}>Hybrid</Radio>
              <Radio value={"Remote"}>Remote</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Job Location"
            name="location"
            className="w-11/12 mr-auto"
          >
            <Input className="text-base" />
          </Form.Item>

          <Form.Item
            label="Apply Link"
            name="applyLink"
            className="w-11/12 mr-auto"
          >
            <Input className="text-base" />
          </Form.Item>
        </div>

        <div className="w-1/2 border-l border-solid border-silver">
          <Form.Item
            label="Role Type"
            name="employmentType"
            rules={[{ required: true, message: "Select a Job type" }]}
            className="w-11/12 ml-auto"
          >
            <Radio.Group
              onChange={onChange}
              value={radioValue}
              className="text-base"
            >
              <Radio value={"Full Time"}>Full Time</Radio>
              <Radio value={"Part Time"}>Part Time</Radio>
              <Radio value={"Internship"}>Internship</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Salary" name="salary" className="w-11/12 ml-auto">
            <Input className="text-base" />
          </Form.Item>

          <Form.Item
            label="Date Posted"
            name="datePosted"
            className="w-11/12 ml-auto"
          >
            <Input className="text-base" />
          </Form.Item>
        </div>
      </div>

      <Form.Item
        label="Job Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Job Description is required",
            whitespace: true,
          },
        ]}
      >
        <TextArea
          rows={6}
          className="!resize-none text-base p-5 "
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </Form.Item>

      <Form.Item
        label="Requirements"
        name="req"
        rules={[
          {
            required: true,
            message: "Job Description is required",
            whitespace: true,
          },
        ]}
      >
        <TextArea
          rows={6}
          className="!resize-none text-base p-5 "
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </Form.Item>

      <Form.Item
        label="Responsibilities"
        name="res"
        rules={[
          {
            required: true,
            message: "Job Description is required",
            whitespace: true,
          },
        ]}
      >
        <TextArea
          rows={6}
          className="!resize-none text-base p-5 "
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </Form.Item>

      <div className="flex justify-end">
        <Form.Item className="mr-2"></Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-vibrantSkyBlue text-base"
          >
            Continue
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
