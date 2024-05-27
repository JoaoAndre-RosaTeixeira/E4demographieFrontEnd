<template>
    <Header />
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style>


body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  text-align: center;
}
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333;
}

/* Header Styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0066cc;
  color: white;
}

header .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

header nav ul li a:hover {
  text-decoration: underline;
}

/* Home Styles */
.home {
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
}

.home h1 {
  font-size: 2.5rem;
  color: #0066cc;
}

.home p {
  font-size: 1.2rem;
  margin: 1rem 0;
}

.home img {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Prediction Form Styles */
.prediction-form, .prediction-results {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.prediction-form h2, .prediction-results h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.prediction-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prediction-form label {
  font-size: 1rem;
  font-weight: bold;
}

.prediction-form input, .prediction-form select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.prediction-form button {
  padding: 1rem 2rem;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.prediction-form button:hover {
  background-color: #218838;
}

/* Results Styles */
.prediction-results p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}


</style>
