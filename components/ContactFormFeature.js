import React, { useState, useEffect } from "react";

export default function ContactFormFeature(props) {

    // download ebook form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const enq_date = new Date();

    //Form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')
        await fetch('https://admin.officecaller.com/api/leads/website_lead/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": "educationalmobileapps.com",
                "first_name": name,
                "email": email,
                "phone": phoneField,
                "city": "Not Available, Not Available",
                "state": "",
                "country": "Not Available",
                "address_line": "",
                "latitude": "", "longitude": "",
                "contact_lead": props.contactlead,
                "app_category": "",
                "category_text": "",
                "app_platform": "",
                "cross_platfrom_status": "",
                "which_cross_platform": "",
                "grand_cost": "",
                // "enq_date": enq_date,
                "favourite": "",
                "enq_through": "educationalmobileapps.com",
                "enq_from": "No",
                "enquiryfrom": "No",
                "country_code": "Not Available",
                "choosen_approach": "NA",
                "choosen_devices": "NA",
                "choosen_screen_count": 0,
                "choosen_login_methods": [],
                "choosen_features": [],
                "choosen_language": "NA",
                "choosen_admin": "NA ",
                "admin_efforts": 0,
                "choosen_webapp": "NA",
                "secondary_app": "NA",
                "screen_efforts": 0,
                "webservices": 0,
                "webapp_efforts": 0,
                "ios_efforts": 0,
                "android_efforts": 0,
                "crossplatform_efforts": 0,
                "secondary_app_efforts": 0,
                "features_efforts": 0,
                "database_efforts": 0,
                "grand_total_efforts": 0,
                "approx_cost": "NA",
                "timeline_month": "NA",
                "user_comment": "NA",
                // "mail_date": enq_date,
                "apikey": "7dac0fcac909b349"
            })
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!');
                // window.setTimeout(function () {
                //     window.location = "/Edtech-apps.pdf";
                // }, 100);
            } else {
                console.log('Something went wrong...please check')
            }
        })
    }
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(e) }} className={props.formclass} autoComplete="off" noValidate>
                <div className='row'>
                    <div className='col-lg-12 mb-3'>
                        <div className='form-field has-validation'>
                            <input className="form-control" type='text' id="name" name="name" aria-describedby="inputGroupPrepend" onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' required />
                            <div className="invalid-feedback">
                                Please type your Name
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 mb-3'>
                        <div className='form-field has-validation'>
                            <input className="form-control" type='email' id="email" name="email" aria-describedby="inputGroupPrepend" onChange={(e) => { setEmail(e.target.value) }} placeholder='Your Email' required />
                            <div className="invalid-feedback">
                                Please enter valid email address
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 mb-3'>
                        <div className='form-field has-validation'>
                            <input className="form-control" type='text' id="phonefield" name="phonefield" aria-describedby="inputGroupPrepend" onChange={(e) => { setPhoneField(e.target.value) }} placeholder='Phone Number' required />
                            <div className="invalid-feedback">
                                Please enter phone no.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='formconfirm-msg1' style={{ display: `none`}}>
                            <div style={{ display: `inline-flex`, border: `solid 1px #ccc`, padding: `10px`, margin: `10px 0`, fontWeight: `bold`, boxShadow: `0 5px 20px rgba(0,0,0,0.1)`, background: `#fff`, fontSize: `22px` }}>
                                Thanks for submission. Please download the E-Book
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary btn-rounded btn-lg'>{props.submitbtntxt} <i className='fa fa-arrow-right ms-2'></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}