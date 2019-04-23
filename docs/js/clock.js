
$(() => {

    //秒
    setInterval(() => {
        let second = new Date().getSeconds();
        let sdegree = second * 6;
        let srotate = "rotate(" + sdegree + "deg)";

        $("#sec").css({ "transform": srotate });

    }, 1000);

    //時
    setInterval(() => {
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let hdegree = hour * 30 + (min / 2);
        let hrotate = "rotate(" + hdegree + "deg)";

        $("#hour").css({ "transform": hrotate })

    }, 1000)

    //分
    setInterval(() => {
        let min = new Date().getMinutes()
        let mdegree = min * 6;
        let mrotate = "rotate(" + mdegree + "deg)";

        $("#min").css({ "transform": mrotate })

    }, 1000);




})

