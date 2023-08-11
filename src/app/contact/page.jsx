"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { useState } from 'react';



export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [isUploading, setIsUploading] = useState(false);
    const onSubmit = (data) => {

        const formData = new FormData();

        formData.append("company-name", data.CompanyName);
        formData.append("your-name", data.FullName);
        formData.append("text", data.Gender);
        formData.append("menu-428", data.Education);
        formData.append("your-address", data.Address);
        formData.append("your-email", data.Email);

        formData.append("tel-208", data.PhoneNumber);
        formData.append("text-144", data.Subject);
        formData.append("your-message", data.Message);
        formData.append("file-test", data.Thumbnail[0]);

        // setIsUploading(true);
        axios.post('http://bai-tap3/wp-json/contact-form-7/v1/contact-forms/274/feedback',
            formData,

            {
                headers: {
                    // 'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    window.location.href = '/thank'
                }
            }).catch((err) => { console.log(err) });
        // setIsUploading(false);
    }

    return (
        <main>
            <div className="container">
                <h1 className="contact-title"> Contact us </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label-form">
                        <span className="form_title">Company
                            <span className="form_requie">*</span>
                        </span>
                        <span className="form_content">
                            <input type="text" name="company-name" className="wpcf7-form-control" placeholder="Company Name..."
                                {...register("CompanyName", {
                                    required: 'Please fill out this field.',
                                    maxLength: {
                                        value: 80,
                                        message: 'Maximum length 80 characters.'
                                    }
                                })}
                            />
                            {errors.CompanyName && <p>{errors.CompanyName?.message}</p>}
                        </span>

                    </label>
                    <label className="label-form">
                        <span className="form_title">Name
                            <span className="form_requie">*</span>
                        </span>
                        <span className="form_content">
                            <input type="text" name="your-name" className="wpcf7-form-control" placeholder="Full Name..."
                                {...register("FullName", {
                                    required: 'Please fill out this field.',
                                    maxLength: {
                                        value: 80,
                                        message: 'Maximum length 80 characters.'
                                    }
                                })}
                            />
                            {errors.FullName && <p>{errors.FullName?.message}</p>}
                        </span>
                    </label>
                    <div className="label-form">
                        <span className="form_title">Gender</span>
                        <span className="form_content2">
                            <span className="wpcf7-form-control-wrap" data-name="text">
                                <span className="wpcf7-form-control wpcf7-radio">
                                    <span className="wpcf7-list-item first">
                                        <label>
                                            <input
                                                {...register("Gender")}
                                                type="radio"
                                                value="Male"
                                                id="field-male"
                                                checked="checked"
                                            />
                                            Male
                                        </label>
                                    </span>
                                    <span className="wpcf7-list-item">
                                        <label>
                                            <input
                                                {...register("Gender")}
                                                type="radio"
                                                value="Female"
                                                id="field-female"
                                            />
                                            Female
                                        </label>
                                    </span>
                                    <span className="wpcf7-list-item last">
                                        <label>
                                            <input
                                                {...register("Gender")}
                                                type="radio"
                                                value="Other"
                                                id="field-other"
                                            />
                                            Other
                                        </label>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <label className="label-form">
                        <span className="form_title"> Education
                            <span className="form_requie">*</span>
                        </span>
                        <span className="form_content">
                            <span className="wpcf7-form-control-wrap" data-name="menu-428">
                                <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                    {...register("Education", {
                                        required: 'Please fill out this field.',
                                    })}
                                >
                                    <option value="">Please select option..</option>
                                    <option value="Education 1">Education 1</option>
                                    <option value="Education 2">Education 2</option>
                                    <option value="Education 3">Education 3</option>
                                </select>
                                {errors.Education && <p>{errors.Education?.message}</p>}
                            </span>
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title"> Address
                            <span className="form_requie">*</span>
                        </span>
                        <span className="form_content">
                            <input type="text" name="your-address" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Address..."
                                {...register("Address", {
                                    required: 'Please fill out this field.',
                                    maxLength: {
                                        value: 80,
                                        message: 'Maximum length 80 characters.'
                                    }
                                })}
                            />
                            {errors.Address && <p>{errors.Address?.message}</p>}
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title"> Email
                            <span className="form_requie">*</span>
                        </span>
                        <span className="form_content">
                            <input type="text" name="your-email"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                placeholder="youremail@company.com..."
                                {...register("Email", {
                                    required: 'Please fill out this field.',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Please enter an email address.'
                                    }
                                })}
                            />
                            {errors.Email && <p>{errors.Email?.message}</p>}
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title"> Phone Number</span>
                        <span className="form_content">
                            <input type="tel"
                                name="tel-208"
                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                placeholder="Phone number..."
                                {...register("PhoneNumber", {
                                    minLength: {
                                        value: 6,
                                        message: 'Min 6'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'Max 12'
                                    }
                                })}
                            />
                            {errors.PhoneNumber && <p>{errors.PhoneNumber?.message}</p>}
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title"> Subject</span>
                        <span className="form_content">
                            <input
                                type="text"
                                name="text-144"
                                className="wpcf7-form-control wpcf7-text"
                                placeholder="Subject..."
                                {...register("Subject", {
                                    maxLength: {
                                        value: 80,
                                        message: 'Maximum length 80 characters.'
                                    }
                                })}
                            />
                            {errors.Subject && <p>{errors.Subject?.message}</p>}
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title">Message</span>
                        <span className="form_content">
                            <textarea
                                name="your-message"
                                cols="40"
                                rows="10"
                                className="wpcf7-form-control wpcf7-textarea"
                                placeholder="Message..."
                                {...register("Message", {
                                    maxLength: {
                                        value: 500,
                                        message: 'Maximum length 500 characters.'
                                    }
                                })}
                            >

                            </textarea>
                            {errors.Message && <p>{errors.Message?.message}</p>}
                        </span>
                    </label>
                    <label className="label-form">
                        <span className="form_title">Upload Images</span>
                        <span className="form_content">
                            <input
                                type="file"
                                className="wpcf7-form-control wpcf7-drag-n-drop-file d-none"
                                {...register("Thumbnail")}
                            />
                        </span>
                    </label>
                    <div className="btn-submit">
                        <span className="form-submit">
                            <input type="submit" value="Confirm" className="wpcf7-form-control has-spinner wpcf7-submit" />
                        </span>
                    </div>
                </form>
            </div>
        </main>
    )
}
