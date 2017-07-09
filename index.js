window.onload=function(){
    /**rgb值转换成16进制颜色值 */
    function rgbToHexadecimal(){
        var arr=[];
        var flag=true;//标志
        arr.push(document.getElementById("firstValue").value);
        arr.push(document.getElementById("secondValue").value);
        arr.push(document.getElementById("thirdValue").value);
        /**进行有效性验证和转换为16进制 */
        for(var i=0;i<arr.length;i++){
            if(/\D/.test(arr[i])){
                alert("请输入数字");
                flag=false;
                break;
            }
            if(arr[i]>255||arr[i]<0){
                alert("数字在0-255之间");
                flag=false;
                break;
            }
            arr[i]=parseInt(arr[i]).toString(16).toUpperCase(); //将10进制转为16进制，并转为大写
            if(arr[i].length<2){  //注意：如果只有一位，在前面补0
                arr[i]='0'+arr[i];
            }
        }

        if(flag){
            arr='#'+arr.join('');
            document.getElementById("showHexadecimal").innerHTML=arr;
            document.getElementById("box1").style.backgroundColor=arr;
        }
    }


    /**16进制颜色值转成rgb颜色值 */
    function hexadecimalToRgb(){
        var str=document.getElementById('hexadecimalColor').value;
        var flag=true; // 标志

        /**有效性验证 */
        if(!(/#[0-9a-fA-F]/.test(str))){
            alert("请输入正确的16进制颜色值");
            flag=false;
        }

        var arr=[];
        if(flag){
            for(var i=1,j=0;i<str.length;i=i+2){
                var s=str.substr(i,2); //将字符串两位一组的提取出来
                arr[j]=parseInt(s,16);  //将16进制转换为10进制
                j++;
            }
            str="rgb("+arr.join(',')+')';  //将数组转换为字符串
            document.getElementById('showRGB').innerHTML=str;
            document.getElementById("box2").style.backgroundColor=str;
            }
       
    }


    document.getElementById("button1").addEventListener('click',rgbToHexadecimal,false);
    document.getElementById("button2").addEventListener('click',hexadecimalToRgb,false);
}