import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { RootState } from "../../../GlobalRedux/store";
import { useTranslation } from "react-i18next";

interface Activity {
  id: number;
  name: string;
  score: number;
}

interface ActivityType {
  id: number;
  name: string;
  children: Activity[];
}

function StudentNewPage() {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const [activities, setActivities] = useState<ActivityType[]>([
    {
      id: 0,
      name: "",
      children: [],
    },
  ]);

  const [activityType, setActivityType] = useState<ActivityType | undefined>(
    undefined
  );
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  // State to store the selected file
  const [activityFile, setActivityFile] = useState<File | undefined>(undefined);

  // Function to handle file input change
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Ensure that files array exists and has at least one file
    if (event.target.files && event.target.files.length > 0) {
      // Get the first file from the event target files array
      const file = event.target.files[0];

      // Update the state with the selected file
      setActivityFile(file);
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/activities`) // Replace with the correct URL to your Laravel API
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  // Function to handle changes in the activity type dropdown
  const handleActivityTypeChange = (e: any) => {
    const newActivityType = activities.find(
      (a) => a.id === parseInt(e.target.value)
    );
    setActivityType((e) => newActivityType);

    // Reset activity ID when activity type changes
    setActivity(undefined);
  };
  // Function to handle changes in the activity dropdown
  const handleActivityChange = (e: any) => {
    const newActivity = activityType?.children.find(
      (a) => a.id === parseInt(e.target.value)
    );
    setActivity((e) => newActivity);

    setActivityFile(undefined);
  };
  const handleSubmission = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!activityType || !activity || !activityFile) {
      console.error("Error submitting form:");
      return;
    }
    // Create a FormData object and append the necessary data
    const formData = new FormData();
    formData.append("student_id", user.id.toString());
    formData.append("activity_id", activity?.id.toString());
    if (activityFile) {
      formData.append("file", activityFile);
    }
    // Define the API endpoint
    const apiEndpoint = `${process.env.REACT_APP_API_URL}/applications`; // Replace with your actual API endpoint
    try {
      // Use fetch API to send the data
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        body: formData, // Send the FormData object
        // Do not set Content-Type header when sending FormData
        // Fetch will set it automatically including the `boundary` parameter
      });

      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        console.log("Submission successful:", responseData);
        // Handle success, e.g., showing a success message, redirecting, etc.
      } else {
        console.error(
          "Submission failed:",
          response.status,
          response.statusText
        );
        // Handle error, e.g., showing an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network errors, e.g., showing a network error message
    }
  };
  return (
    <form onSubmit={handleSubmission}>
      <div>
        <h1>{t("studentNewPage.pageTitle")}</h1>

        <label>
          {t("studentNewPage.activityTypeLabel")}
          <select value={activityType?.id} onChange={handleActivityTypeChange}>
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>

        <br />
        {!activityType ? (
          <></>
        ) : (
          <>
            {activityType && (
              <label>
                {t("studentNewPage.activityLabel")}
                <select value={activity?.id} onChange={handleActivityChange}>
                  <option value=""></option>
                  {activityType.children.map((activity) => (
                    <option key={activity.id} value={activity.id}>
                      {activity.name}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <br />
          </>
        )}
        {!activity ? (
          <></>
        ) : (
          <>
            <label>
              {t("studentNewPage.uploadLabel")}
              <input
                type="file"
                onChange={handleFileChange}
                accept=".png, .jpeg, .jpg, image/*, .pdf, .doc, .docx, .xls, .xlsx, .zip"
              />
            </label>
            {/* Display the file name if a file is selected */}
            {activityFile && <p>{t("studentNewPage.selectedDocument")}: {activityFile.name}</p>}
          </>
        )}

        {!activityFile ? <></> : <button type="submit">{t("studentNewPage.submitButton")}</button>}
      </div>
    </form>
  );
}
export default StudentNewPage;
