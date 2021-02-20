// EVENTLISTENER
const categories = document.querySelectorAll('h3');

for (let i = 0; i < categories.length; i++) {
    document.querySelectorAll('h3')[i].addEventListener('click', function () { 
        let category = this.innerHTML;
        hide(category);
        console.log(this);
    });
}

// OBJECTS

const qual = document.querySelector('.qualifications').classList;
const book = document.querySelector('.booking').classList;
const cancel = document.querySelector('.cancellations').classList;
const before = document.querySelector('.beforeCare').classList;
const after = document.querySelector('.afterCare').classList;


// REFACTORING FUNCTIONS
function hideQual() {
    qual.add('hidden');
    document.querySelectorAll('h3')[0].style.color = 'grey';
}

function hideBook() {
    book.add('hidden');
    document.querySelectorAll('h3')[1].style.color = 'grey';
}

function hideCancel() {
    cancel.add('hidden');
    document.querySelectorAll('h3')[2].style.color = 'grey';
}

function hideBefore() {
    before.add('hidden');
    document.querySelectorAll('h3')[3].style.color = 'grey';
}

function hideAfter() {
    after.add('hidden');
    document.querySelectorAll('h3')[4].style.color = 'grey';
}

// SWITCH STATEMENT

function hide(key) {
    switch (key){
        case 'Qualifications':
            if (qual.contains('hidden') == true) {
                qual.remove('hidden');   
                document.querySelectorAll('h3')[0].style.color = 'pink';

                hideBook();
                hideCancel();
                hideBefore();
                hideAfter();
                
            } else if (qual.contains('hidden') == false){
                hideQual();
            }
            break;

        case 'Booking':
            if (book.contains('hidden') == true) {
                book.remove('hidden');
                document.querySelectorAll('h3')[1].style.color = 'pink';

                hideQual();
                hideCancel();
                hideBefore();
                hideAfter();

            } else if (book.contains('hidden') == false){
                hideBook();
            }
            break;

        case 'Cancellations':
            if (cancel.contains('hidden') == true) {
                cancel.remove('hidden');
                document.querySelectorAll('h3')[2].style.color = 'pink';

                hideQual();
                hideBook();
                hideBefore();
                hideAfter();
                
            } else if (cancel.contains('hidden') == false){
                hideCancel()
            }
            break;

        case 'Before Care':
            if (before.contains('hidden') == true) {
                before.remove('hidden');
                document.querySelectorAll('h3')[3].style.color = 'pink';

                hideQual();
                hideBook();
                hideCancel();
                hideAfter();

            } else if (before.contains('hidden') == false){
                hideBefore();
            }
            break;

        case 'After Care':
            if (after.contains('hidden') == true) {
                after.remove('hidden');
                document.querySelectorAll('h3')[4].style.color = 'pink';

                hideQual();
                hideBook();
                hideCancel();
                hideBefore();

            } else if (after.contains('hidden') == false){
                hideAfter();
            }
    }
}
