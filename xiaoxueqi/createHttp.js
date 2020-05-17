function myFunction(act,pwd,callback) {
    // 创建请求
    var xhr = new XMLHttpRequest();
    // 建立与服务器端连接(get/post)
    xhr.open('post',
        'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login');
    // 设置头信息，让数据以表单形式传递给服务器
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // 发送请求
    xhr.send("username=" + act + "&pwd=" + pwd);
    //第四步接收服务端返回的数据
    xhr.onreadystatechange = function () {
        //readyState == 4代表ajax数据请求已经完成
        //status == 200表示数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText中包含了服务端返回的数据
            var res = JSON.parse(xhr.responseText);
            return callback(res);
        }
    }
}