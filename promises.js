async function logMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}

logMessage("Hello, Akirachix!", 2000);


const userIds = [11, 12, 13, 14, 15];
async function getUserDataa() {
    for (const id of userIds) {
        try {
            const userData = await getUserData(id);
            console.log(userData);
        } catch (error) {
            console.log(`Error fetching user data for ID ${id}: ${error.message}`);
        }
    }
}

getUserDataa();

function performTask() {
  performTask()
      .then(() => {
          console.log("Task completed successfully");
      })
      .catch((error) => {
          console.error("Task encountered an error", error);
      });
}

performTask();

function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
      const randomNum = Math.random();
      if (randomNum > failureProbability) {
          resolve(`Task ${taskName} succeeded.`);
      } else {
          reject(`Task ${taskName} failed.`);
      }
  });
}

async function executeWithRetry(taskName, retries, failureProbability) {
  for (let i = 0; i < retries; i++) {
    try {
      await unstableTask(taskName, failureProbability);
          console.log(`Attempt ${i + 1}: Task ${taskName} succeeded.`);
          return;
      } catch (error) {
        console.log(`Attempt ${i + 1}: Task ${taskName} failed.`);
      }
  }
  console.log(`All ${retries} attempts failed for task ${taskName}.`);
}