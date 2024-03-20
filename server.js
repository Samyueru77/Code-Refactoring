const express = require('express');
const app = express();

app.get('/student/1', async (req, res) => {
  const id = req.params.id;
  const student = await getStudentAsync(id);
  console.log('Student: ', student);
  if (student.isEnrolled) {
    const courses = await getCourseListAsync();
    console.log('Course List: ', courses);
    await sendNotificationAsync(student.email, courses);
    console.log('Notification sent...');
  }
  res.json(student);
});

async function getStudentAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Samuel Rouell M. Mazon',
        isEnrolled: true,
        email: 'smazon0607@gmail.com',
      });
    }, 4000);
  });
}

async function getCourseListAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['course1', 'course2']);
    }, 4000);
  });
}

async function sendNotificationAsync(email, courses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});