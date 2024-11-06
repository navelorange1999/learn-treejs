fetch('./example/example-list.json')
    .then(response => response.json())
    .then(exampleList => {
        const urlDOM = document.createElement('ul');
        exampleList.forEach((example: {
            name: string;
            url: string;
        }) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = example.url;
            a.textContent = example.name;
            li.appendChild(a);
            urlDOM.appendChild(li);
        });
        document.body.appendChild(urlDOM);
    });