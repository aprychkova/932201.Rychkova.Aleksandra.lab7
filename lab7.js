function generateShapes(shapeType) {
    const count = document.getElementById('count').value;
    const canvas = document.getElementById('shapes');

    for (let i = 0; i < count; i++) 
        {
        const shape = document.createElement('div');
        shape.className = 'shape ' + shapeType;
        const size = Math.random() * 90 + 20;

        if (shapeType === 'triangle') //создание фигуры
            {
            shape.style.border = `${size}px solid transparent`;
            shape.style.borderBottom = `${size}px solid blue`;
            } 
                else 
                {
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                    if (shapeType === 'circle') 
                        {
                        shape.style.borderRadius = '50%';
                        shape.style.backgroundColor = 'green';
                        } 
                        else 
                        {
                        shape.style.backgroundColor = 'red';
                        }
                }

        //случайные координаты
        const x = Math.random() * (shapes.clientWidth - 50);
        const y = Math.random() * (shapes.clientHeight - 50);

        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;

        shape.onclick = function() //выделение фигуры другим цветом
        {
            const newColor = 'yellow';
            if (shapeType === 'triangle') {
                shape.style.borderBottomColor = newColor;
            } else {
                shape.style.backgroundColor = newColor;
            }
        };

        shape.ondblclick = function() //удаление фигуры
        {
            shapes.removeChild(shape);
            if (shapeType === 'triangle') {
                const borderShape = shapes.querySelector('.border-triangle'); 
                if (borderShape) {
                    shapes.removeChild(borderShape);
                }
            }
        };

        canvas.appendChild(shape);
    }

}