import { useState } from "react";


const exerciseApiExample = [
  {
    "exercise_name": 'Flat Barbell Bench Press',
    "muscle_group": 'Chest',
    "lift_type": 'Compound',
    "equipment": 'Barbell',
    "vid_url": 'https://www.youtube.com/embed/rT7DgCr-3pg?si=bOwJVKD7iSmQFdt6',
    "tags": 'Front-Delt Tricep'
  },
  {
    "exercise_name": "Seated Cable Row",
    "muscle_group": "Back",
    "lift_type": "Compound",
    "equipment": "Machine",
    "vid_url": "https://www.youtube.com/embed/UCXxvVItLoM?si=yqqwM_WAZUQ4LkJb",
    "tags": "Rear-Delt Traps"
  },
  {
    "exercise_name": "Dumbell Shoulder Press",
    "muscle_group": "Shoulders",
    "lift_type": "Compound",
    "equipment": "Dumbell",
    "vid_url": "https://www.youtube.com/embed/HzIiNhHhhtA?si=ebcs-yli0TThTen3",
    "tags": "Front-Delt"
  },
  {
    "exercise_name": "Walking Lunges",
    "muscle_group": "Legs",
    "lift_type": "Compound",
    "equipment": "Body",
    "vid_url": "https://www.youtube.com/embed/_meXEWq5MOQ?si=rlIulGAU5B8M8hHM",
    "tags": "Quads Hamstring Glutes"
  },
  {
    "exercise_name": "Tricep Dips",
    "muscle_group": "Arms",
    "lift_type": "Isolation",
    "equipment": "Body",
    "vid_url": "https://www.youtube.com/embed/sM6XUdt1rm4?si=vVFehi1GCahMnwq8",
    "tags": "Tricep"
  },
]



function App() {

  const [selectedExercise, setSelectedExercise] = useState(exerciseApiExample[0]);

  const handleSelectChange = (event) => {
    setSelectedExercise(exerciseApiExample[event.target.value]);
  };



  return (
    <>
      <div className="hero-banner">

        <h1 className="api-title">
          Exercise API Demo
        </h1>

        <div className="paragraph">
          <p >Welcome to my fitness exercise API demonstration! This webpage showcases a simple yet powerful API designed to enrich your fitness application or website with a vast library of exercise information. Below, you'll find an example of the JSON data returned by our API, featuring detailed attributes such as muscle name, muscle group, lift type, equipment required, a video tutorial link, and relevant tags. Our API is built on a robust AWS infrastructure, utilizing RDS with PostgreSQL for database management, Lambda for serverless compute functions, and API Gateway for seamless access. This efficient and scalable solution is perfect for developers looking to integrate comprehensive exercise data into their projects, providing users with valuable insights to enhance their fitness journey. Explore the example below to see how our API can serve as a cornerstone for your fitness-related content, driving both engagement and value.</p>
        </div>
        <div className="json-container">

          <select className="dropdown-menu" onChange={handleSelectChange}>
            <option value="0">Chest</option>
            <option value="1">Back</option>
            <option value="2">Shoulders</option>
            <option value="3">Legs</option>
            <option value="4">Arms</option>

          </select>

          <div className="json-example">
            <pre>{JSON.stringify(selectedExercise, null, 2)}</pre>
          </div>
        </div>
        <p className="footer">This webpage serves as a demonstration for portfolio purposes only. The actual API is currently private to prevent unauthorized use.</p>
      </div>


    </>
  )

}

export default App
