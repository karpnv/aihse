const URL = 'https://7012.lnsigo.mipt.ru/answer';


askQuestion = () => {
    let response;
    const input = document.getElementById('input-field');
    const messageContainer = document.getElementById('message-container');

    if (input.value === '')
        return;

    const newMessage = document.createElement('div');

    newMessage.classList.add('box');
    newMessage.classList.add('sb2');
    newMessage.innerHTML=input.value;

    const responseMessage = document.createElement('div');
    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            response = JSON.parse(xhr.responseText);

            responseMessage.classList.add('box');
            responseMessage.classList.add('sb1');
            responseMessage.innerHTML=response;

            messageContainer.appendChild(newMessage);
            messageContainer.appendChild(responseMessage);

            input.value = '';
            input.focus();

            return;
        }

        alert('Что-то пошло не так');

    };
    var data = JSON.stringify({"text1": input.value});
    xhr.send(data);
};

enterPress = (event) => {
    if (event.keyCode === 13) {
        askQuestion();
    }

    return;
}
