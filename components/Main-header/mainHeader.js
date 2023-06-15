import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactFormFeature from "../ContactFormFeature";

const MainHeader = () => {

    const router = useRouter();

    // download ebook form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const enq_date = new Date();

    //Form validation
    useEffect(() => {
        // exit intent code
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            } else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }
        addEvent(document, 'mouseout', function (evt) {
            if (evt.toElement == null && evt.relatedTarget == null) {
                // alert('mouse bahar!');
                document.querySelector('.exitintent-popup').classList.add('exitintent-popup-active');
            };
        });

        // form validation code header form 1
        'use strict'
        var forms = document.querySelectorAll('.needs-validation1')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {
                        // console.log("Thanks for submission");
                        document.querySelector(".formconfirm-msg1").style.display = "flex";
                    }
                    form.classList.add('was-validated')
                }, false)
            });

        //Form validation of Exit intent popup
        'use strict'
        var forms = document.querySelectorAll('.needs-validation2')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {
                        // console.log("Thanks for submission");
                        document.querySelector(".formconfirm-msg2").style.display = "flex";
                    }
                    form.classList.add('was-validated')
                }, false)
            });
    });

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
                "contact_lead": "Download E-Book (educationalmobileapps.com)",
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
                window.setTimeout(function () {
                    window.location = "/Edtech-apps.pdf";
                }, 100);
            } else {
                console.log('Something went wrong...please check')
            }
        })
    }

    // Exit intent form function
    const handleSubmit2 = async (e) => {
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
                "contact_lead": "Exit Intent Popup form (educationalmobileapps.com)",
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
                window.setTimeout(function () {
                    window.location = "/Edtech-apps.pdf";
                }, 100);
            } else {
                console.log('Something went wrong...please check')
            }
        })
    }

    // close pop-up
    function exitPopClose() {
        document.querySelector('.exitintent-popup').classList.add('exitintent-popup-displaynone');
        document.querySelector('.exitintent-popup-displaynone').classList.remove('exitintent-popup-active');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="customheader">
                <div className="container">
                    <Link href='/'>
                        <a className="navbar-brand">
                            <img
                                src="/images/edsysLogo.png"
                                alt="Edsys"
                            />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/educational-app/?utm_source=EMA_HP&utm_medium=Top_CTA_Btn&utm_campaign=Lead_gen">
                                    <a className={router.asPath === '/educational-app' ? "nav-link active" : "nav-link"}>Education App</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/edtech-apps/?utm_source=EMA_HP&utm_medium=Top_CTA_Btn&utm_campaign=Lead_gen">
                                    <a className={router.asPath === '/edtech-apps' ? "nav-link active" : "nav-link"}>Edtech App</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href='#' className='nav-link' data-bs-toggle="modal" data-bs-target="#exampleModal">Download E-Book</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* DOWNLOAD E-BOOK MODAL */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Download E-Book</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => { handleSubmit(e) }} className="needs-validation1" autoComplete="off" noValidate>
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
                                        <div className='formconfirm-msg1' style={{ display: `none` }}>
                                            <div style={{ display: `inline-flex`, border: `solid 1px #ccc`, padding: `10px`, margin: `10px 0`, fontWeight: `bold`, boxShadow: `0 5px 20px rgba(0,0,0,0.1)`, background: `#fff` }}>
                                                Thanks for submission. Please download the E-Book
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-primary btn-rounded btn-lg'>Get Your Free E-Book <i className='fa fa-arrow-right ms-2'></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* exitintent-popup */}
            <div className="exitintent-popup">
                <div className="exitintent-popup-overlay"></div>
                <div className="exitintent-popupinner">
                    <div>
                        <div className="exitintent-popup-closebtn" onClick={exitPopClose}><span>✕</span></div>
                        <section>
                            <h2 className="mb-4"><strong>Need access to latest Ed-Tech trends?</strong></h2>
                            <h5 className="mb-4">Get in touch with us.</h5>
                            <form onSubmit={(e) => { handleSubmit2(e) }} className="needs-validation2" autoComplete="off" noValidate>
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
                                        <div className='formconfirm-msg2' style={{ display: `none` }}>
                                            <div style={{ display: `inline-flex`, border: `solid 1px #ccc`, padding: `10px`, margin: `10px 0`, fontWeight: `bold`, boxShadow: `0 5px 20px rgba(0,0,0,0.1)`, background: `#fff` }}>
                                                Thanks for submission. Please download the E-Book
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-primary btn-rounded btn-lg'>Get Your Free E-Book <i className='fa fa-arrow-right ms-2'></i></button>
                                    </div>
                                </div>
                            </form>
                        </section>
                        <img src="/images/modal-image.webp" alt="EdTech apps" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainHeader;
