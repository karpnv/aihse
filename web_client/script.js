const URL = 'http://172.17.190.7:5001/go-bot';

askQuestion = () => {
    let response;
    const input = document.getElementById('input-field');
    const messageContainer = document.getElementById('message-container');

    if (input.value === '')
        return;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            response = JSON.parse(xhr.responseText);
			
			const messageWrapper = document.createElement('li');
			const newMessage = document.createElement('div');

			newMessage.classList.add('box');
			newMessage.classList.add('sb2');
			newMessage.classList.add('user-message');
			newMessage.innerHTML=input.value;
			messageWrapper.appendChild(newMessage);
			messageContainer.appendChild(messageWrapper);

			const responseWrapper = document.createElement('li');
			const responseMessage = document.createElement('div');
            responseMessage.classList.add('box');
            responseMessage.classList.add('sb1');
            responseMessage.innerHTML=response;

			responseWrapper.appendChild(responseMessage);
			messageContainer.appendChild(responseWrapper);

            input.value = '';
            input.focus();

            return;
        }

    };
    var data = JSON.stringify({"context": [input.value]});
    xhr.send(data);
	
	messageContainer.scrollTop = messageContainer.scrollHeight;
};

enterPress = (event) => {
    if (event.keyCode === 13) {
        askQuestion();
    }

    return;
};

scrollToTop = () => {
	const messageContainer = document.getElementById('message-container');
	const scrollButton = document.getElementById('scroll-top-btn');
	
	messageContainer.scrollTop = 0;
	scrollButton.style.display = 'none';
};

clearHistory = () => {
	const messageContainer = document.getElementById('message-container');
	const scrollButton = document.getElementById('scroll-top-btn');
	
	messageContainer.innerHTML = "";
	scrollButton.style.display = 'none';
};