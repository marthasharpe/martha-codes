import * as React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Form = ({ handleOpenSnackbar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const [isLoading, setIsLoading] = React.useState(false);

  const sendEmail = async (formData) => {
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        "service_izm4lqk",
        "template_8cqhlkd",
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          video: formData.video,
        },
        "mtjjkSsRLcCUGpO6N"
      );
      if (response.status === 200) {
        handleOpenSnackbar("success", "Your application has been submitted!");
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
      reset();
    } catch (error) {
      handleOpenSnackbar("error", "Something went wrong. Please try again.");
      console.error(error);
    }
    setIsLoading(false);
  };

  const onSubmit = (formData) => {
    sendEmail(formData);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title">Mini Fellowship Application</h2>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="firstName">
          First Name
        </label>
        <input
          placeholder="Enter your first name..."
          className="input-field"
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="error-message">This field is required</span>
        )}
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          placeholder="Enter your last name..."
          className="input-field"
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="error-message">This field is required</span>
        )}
      </div>

      <div className="input-wrapper">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Enter your email address..."
          className="input-field"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email?.message}</span>
        )}
      </div>

      <div className="input-wrapper">
        <label className="input-label" htmlFor="video">
          Video Link
        </label>
        <p className="subtext">
          Provide the link to your submission video via YouTube, Google Drive,
          or Dropbox. Make sure to grant us access so we can view it.
        </p>
        <input
          placeholder="Enter the link to your video..."
          className="input-field"
          type="url"
          {...register("video", {
            required: "This field is required",
            validate: (value) =>
              isValidUrl(value) || "Please enter a valid URL",
          })}
        />
        {errors.video && (
          <span className="error-message">{errors.video?.message}</span>
        )}
      </div>

      <div className="input-wrapper">
        <label className="input-label" htmlFor="release">
          Consent & Release Agreement
        </label>
        <p className="subtext">
          This agreement is for the application video only, granting us full
          permission to use it in our projects. There will be a separate
          agreement for the Mini Fellowship if you are selected.
        </p>
        <div className="release-form">
          <p>
            By submitting this application, I hereby grant Sharpe Team LLC
            ("Company") and its successors, assigns, licensees, and designees
            ("Company Parties") the irrevocable right and permission to use,
            reproduce, edit, modify, distribute, publish, and display the video
            I have submitted as part of my application for the Mini Fellowship
            ("Video"), in any media, including without limitation, print,
            audiovisual, digital, electronic, and online media.
          </p>
          <p>
            I acknowledge that the Video may be used in any manner or context,
            including but not limited to commercial, advertising, educational,
            or promotional materials, without further consent or compensation to
            me. I agree that the Company and the Company Parties may edit,
            modify, or combine the Video with other materials or information,
            and that the Company and the Company Parties have no obligation to
            use or publish the Video.
          </p>
          <p>
            I represent and warrant that I have the full right, power, and
            authority to grant this consent and release, and that the Video does
            not infringe the intellectual property or privacy rights of any
            third party. I agree to indemnify and hold harmless the Company and
            the Company Parties from any claims, damages, liabilities, or
            expenses arising out of or related to the use of the Video as
            permitted herein.
          </p>
          <p>
            I further acknowledge and agree to hold the original grantor of
            these funds, O’Shaughnessy Ventures LLC (“OSV”), harmless and
            indemnify them and waive all rights to bring legal action of any
            kind against them as a result of my actions resulting from any
            activities I undertake in the Video. I voluntarily assume full
            responsibility for all risks of personal injury, death, and property
            damage while participating in activities at any venue owned or
            operated by OSV or sponsored by OSV at any location, including the
            risk of passive or active negligence on the part of the OSV and its
            members, employees, officers and agents. By sumbitting the Video, I
            agree to release OSV and its affiliated entities, together with
            their respective members, directors, employees, officers, licensees,
            licensors and agents, and respective advertising and promotion
            entities, from any and all liability, loss, or damage arising from
            or in connection with awarding, receipt or participation in any
            OSV-related program.
          </p>
          <p>
            I understand that this consent and release is binding on me, my
            heirs, executors, administrators, and assigns. I acknowledge that I
            have read this consent and release, and understand its contents.
          </p>
          <p>
            By checking the box below, I indicate my acceptance and agreement to
            the terms of this consent and release agreement.
          </p>
        </div>
        <div className="checkbox-wrapper">
          <input
            className="input-field"
            type="checkbox"
            {...register("release", {
              required: "You must accept the terms of the above agreement",
            })}
          />
          <span className="checkbox-label">
            I agree to the terms of the above Consent and Release Agreement
          </span>
        </div>
        {errors.release && (
          <span className="error-message">{errors.release?.message}</span>
        )}
      </div>
      {isLoading ? (
        <button disabled className="button" type="submit">
          <FontAwesomeIcon icon={faCircleNotch} className="spinner" /> Submit
        </button>
      ) : (
        <button disabled={!isValid} className="button" type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default Form;
