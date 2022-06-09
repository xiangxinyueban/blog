export default {
    mounted(el){
        // const oContainer = el.querySelector('.container')
        const oInputContainer = el.querySelector('.input-container');
        // console.log("el", el);
        const oInput = oInputContainer.querySelector('input'),
              oSubDetail = el.querySelector('.subdetail');
        // console.log("style", oInputContainer.style);
        oInput.addEventListener('focus', function(){
            console.log("style", oInputContainer.style);
            oInputContainer.style.borderRadius = '4px 4px 0 0';
            oInput.style.backgroundColor = "#ddd";
            oInputContainer.style.backgroundColor = '#f9f9f9';
            oSubDetail.style.display = 'block';
            console.log("subDetail", oSubDetail);
            oSubDetail.style.borderRadius = '0 0 4px 4px';
        }, false);

        document.addEventListener('click', function(event){
            // console.log("失焦", el);
            if (!(event.target == el) && !el.contains(event.target)){
                oInputContainer.style.borderRadius = '4px';
                oInput.style.backgroundColor = "#f9f9f9";
                oSubDetail.style.display = 'none';
            }

        }, true);

        // el.addEventListener('click', function(event){
            // oSubDetail.style.display = 'block';
            // event = event || window.event;
            // console.log("mycontainer", event);
            // event.stopPropagation();
        // }, false);

        // oInput.addEventListener('key')
    }
}