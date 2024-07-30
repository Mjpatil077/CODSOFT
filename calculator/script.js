let screen = document.getElementById('screen');
        let currentInput = '';

        function appendToScreen(value) {
            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            updateScreen();
        }

        function clearScreen() {
            currentInput = '0';
            updateScreen();
        }

        function updateScreen() {
            screen.textContent = currentInput;
        }

        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                updateScreen();
            } catch (error) {
                currentInput = 'Error';
                updateScreen();
            }
        }

        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (/[0-9+\-*/.=]/.test(key)) {
                event.preventDefault();
                if (key === '=') {
                    calculate();
                } else {
                    appendToScreen(key);
                }
            } else if (key === 'Enter') {
                event.preventDefault();
                calculate();
            } else if (key === 'Escape') {
                event.preventDefault();
                clearScreen();
            }
        });