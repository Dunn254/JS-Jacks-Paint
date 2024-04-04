function configureListeners() {
    let images = document.querySelectorAll('.img-color');

    // Iterate over each image element using a for loop
    for (var i = 0; i < images.length; i++) {
        // Attach event listener for mouseover
        images[i].addEventListener('mouseover', function() {
            // Reduce opacity
            this.style.opacity = 0.5;

            // Get the ID
            var id = this.id;

            // Display ID in the console (you can do something else with it)
            console.log("Image ID: " + id);
            getProductInfo(id)
        });
        images[i].addEventListener('mouseout', function() {
            // Reduce opacity
            this.style.opacity = 1;
        });
    }
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let element = document.getElementById('color-price');
    let color = document.getElementById('color-name');
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price 
            element.textContent = '$14.99';
            color.textContent = 'Lime Green';   
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$11.14';
            color.textContent = 'Medium Brown';
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$22.99';
            color.textContent = 'Royal Blue';
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$13.42';
            color.textContent = 'Solid Red';
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$21.98';
            color.textContent = 'Solid White';     
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$4.99';
            color.textContent = 'Solid Black';     
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$8.22';
            color.textContent = 'Solid Cyan';
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price 
            element.textContent = '$11.99';
            color.textContent = 'Solid Purple';
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price
            element.textContent = '$14.99';
            color.textContent = 'Solid Yellow';
            break;   
          default:              
    }
    
}
