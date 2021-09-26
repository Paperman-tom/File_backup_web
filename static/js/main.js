var del_li = function(){
    $(event.target).parent().prevAll('li').remove();
    $(event.target).parent().remove();
};

$(function () {
    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        hour = (hour < 10 ? '0' : '') + hour;
        minute = (minute < 10 ? '0' : '') + minute;
        second = (second < 10 ? '0' : '') + second;
        let nowtime = hour + ' : ' + minute + ' : ' + second;
        $('#timer').text(nowtime);
    }

    $('#OptBox').mouseover(function () {
        $('.bgbox').addClass('focus')
    });
    $('#OptBox').mouseout(function () {
        $('.bgbox').removeClass('focus')
    });
    setInterval(showTime, 1000);

    $('.file_btn').click(function () {
        $(this).prevAll("input").click();
    });


    document.getElementById("ori_file").addEventListener("change", function (event) {
        let output = document.getElementById("ori_path");
        let file = $(this).val();
        console.log(file);
        let files=file.split(',');
        for (let i=0; i<files.length; i++){
            let item = document.createElement("li");
            item.innerHTML = files[i].replace(/(^\s*)/g, "");
            let del_item = document.createElement("span");
            del_item.innerHTML="<a onclick\= \'del_li()\'>del </a>";
            output.appendChild(item);
            output.appendChild(del_item);
        }


    }, false);

    document.getElementById("dest_file").addEventListener("change", function (event) {
        let output = document.getElementById("dest_path");
        let file = $(this).val();
        console.log(file);
        let files=file.split(',');
        for (let i=0; i<files.length; i++){
            let item = document.createElement("li");
            item.innerHTML = files[i].replace(/(^\s*)/g, "");
            let del_item = document.createElement("span");
            del_item.innerHTML="<a onclick\= \'del_li()\'>del </a>";
            output.appendChild(item);
            output.appendChild(del_item);
        }
    }, false);


})