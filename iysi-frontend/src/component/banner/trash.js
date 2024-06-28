    const selectedIndex = e.target.selectedIndex;
    const lastOptionID = e.target.options[selectedIndex].id;
    const value = lastOptionID == "specify" && prompt("specify here");
    if(value){
    setValueData(value);
    }


    const [valueData, setValueData] = useState("");

































// import { useState } from "react";
// import axios from "axios";
// import "./banner.css";
// import { TbWorldSearch } from "react-icons/tb";
// import { GoArrowRight } from "react-icons/go";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     occupation: "",
//     institution: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     occupation: "",
//     institution: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Form Data", formData);
//     try {
//       const response = await axios.post("/api/register", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Data submitted successfully:", response.data);
//       alert("Your request is submitted");
//       // console.log("Form Data", formData);
//     } catch (error) {
//       if (error.response.data.errors) {
//         const serverErrors = error.response.data.errors;
//         setErrors({
//           name: serverErrors.name ? serverErrors.name.join("") : "",
//           email: serverErrors.email ? serverErrors.email.join("") : "",
//           gender: serverErrors.gender ? serverErrors.gender.join("") : "",
//           occupation: serverErrors.occupation
//             ? serverErrors.occupation.join("")
//             : "",
//           institution: serverErrors.institution
//             ? serverErrors.institution.join("")
//             : "",
//         });
//       } else {
//         setErrors({
//           name: "",
//           email: "",
//           gender: "",
//           occupation: "",
//           institution: "an error occur!",
//         });
//       }
//       console.error("Error submitting data:", error);
//     }
//   };
//   return (
//     <div className="banner container" id="banner">
//       <div className="center">
//         <div className="banner-txt">
//           <span>Specialization over generalization</span>
//           <h1>
//             Next-Ed Tech Focus <br />
//             Artchitect Courses <span>& GIS</span>
//           </h1>
//           <p>
//             &#34;Master cutting edge technology and architectural principles
//             with live, interative sessions lied by industry renowned
//             mentors.&#34;
//           </p>
//           <h2>Live Interactive Webinar Event</h2>
//           <Link to="CommunityRouteOne" className="btn white">
//             <TbWorldSearch size="18" /> Join Community
//           </Link>
//         </div>
//         <div className="get-in-touch">
//           <h1>We&#39;re here to help!</h1>
//           <p>Lets us know who are and course you&#39;d be interested in!</p>
//           <form id="get-in-touch" name="form1" onSubmit={handleSubmit}>
//             <label htmlFor="">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className={errors.name ? "margin-danger" : "undefined"}
//                 name="name"
//                 onChange={handleChange}
//                 required
//                 autoComplete="true"
//               />
//               {errors.name && <span className="er">{errors.name}</span>}
//             </label>

//             <label htmlFor="">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className={errors.email ? "margin-danger" : "undefined"}
//                 name="email"
//                 onChange={handleChange}
//                 required
//                 autoComplete="true"
//               />
//               {errors.email && <span className="er">{errors.email}</span>}
//             </label>

//             <label htmlFor="">
//               <input
//                 type="text"
//                 placeholder="Occupation"
//                 className={errors.occupation ? "margin-danger" : "undefined"}
//                 name="occupation"
//                 onChange={handleChange}
//                 required
//                 autoComplete="true"
//               />
//               {errors.occupation && (
//                 <span className="er">{errors.occupation}</span>
//               )}
//             </label>
// {/* 
//             <label htmlFor="">
//               <input
//                 type="text"
//                 placeholder="sex"
//                 className={errors.gender ? "margin-danger" : "undefined"}
//                 name="gender"
//                 onChange={handleChange}
//                 required
//                 autoComplete="true"
//               />
//               {errors.gender && <span className="er">{errors.gender}</span>}
//             </label> */}
//             <label aria-label="choose-an-option">
//               <div className={`select-container ${errors.gender ? "margin-danger": "undefined"}`}>
//                 <select name="gender" required onChange={handleChange}>
//                   <option defaultValue hidden>
//                     Sex
//                   </option>
//                   <option>male</option>
//                   <option>female</option>
//                 </select>
//               </div>
//               {errors.institution && (
//                 <span className="er">{errors.gender}</span>
//               )}
//             </label>

//             {/* // <input
//             //   type="text"
//             //   placeholder="Your phone number"
//             //   className="name"
//             //   name="gender"
//             //   onChange={handleChange}
//             //   required
//             //   autoComplete ='true'
//             // /> */}
//             <label aria-label="choose-an-option">
//               <div className={`select-container ${errors.institution ? "margin-danger": "undefined"}`}>
//                 <select name="institution" required onChange={handleChange}>
//                   <option defaultValue hidden>
//                     Select courses
//                   </option>
//                   <option>NIIT</option>
//                   <option>Obim Entrprise</option>
//                   <option>Natek</option>
//                   <option>computer Training Center</option>
//                 </select>
//               </div>
//               {errors.institution && (
//                 <span className="er">{errors.institution}</span>
//               )}
//             </label>

//             <button type="submit" className="btn bg-variant">
//               Get in Touch <GoArrowRight size="20" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
