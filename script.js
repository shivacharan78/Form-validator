@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
:root {
    --success-color: rgb(0, 255, 0);
    --error-color: rgb(255, 0, 0);
}

* {
    box-sizing: border-box;
}

body {
    background-color: #636a72;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
}

h2 {
    text-align: center;
    margin: 0 0 20px;
}

.form {
    padding: 30px 40px;
}

.form-control {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}

.form-control label {
    color: #777;
    display: block;
    margin-bottom: 5px;
}

.form-control input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
}

.form-control input:focus {
    outline: 0;
    border-color: #777;
}

.form-control.success input {
    border-color: var(--success-color);
}

.form-control.error input {
    border-color: var(--error-color);
}

.form-control small {
    color: var(--error-color);
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
}

.form-control.error small {
    visibility: visible;
}

.form button {
    cursor: pointer;
    background-color: #3498db;
    border: 2px solid;
    border-radius: 4px;
    color: white;
    display: block;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
}

.form button:hover {
    background-color: rgb(102, 215, 243);
    transition: 1s ease;
}