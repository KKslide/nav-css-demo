//çŤĺłć§čĄĺ˝ć°
//!çä˝ç¨ćŻĺčŻjavascriptĺźćčżćŻä¸ä¸Şĺ˝ć°čĄ¨čžžĺźďźä¸ćŻĺ˝ć°ĺŁ°ćďź()ăďźă+ă-ç­čżçŽçŹŚé˝č˝ĺŽç°čżä¸Şä˝ç¨ďźä¸čż()ćŻćĺŽĺ¨ç
//ĺ¨!function(){}ĺé˘ĺ ä¸()äźçŤĺłč°ç¨čżä¸Şĺ˝ć°
//čżć ˇĺĺŻäťĽć¨Ąäťżä¸ä¸Şç§ćä˝ç¨ĺďźčżć ˇhtmlćäťśĺźç¨ĺ¤ä¸Şjsćäťśćśäžżä¸äźé ćĺéĺ˛çŞ
! function () {

    //canvasĺç´ ç¸ĺł
    //ĺĺťşcanvasĺç´ ďźĺšśčŽžç˝Žcanvasĺç´ çid
    var canvas = document.createElement("canvas"),
        context = canvas.getContext("2d"),
        attr = getAttr();

    //čŽžç˝Žĺĺťşçcanvasçç¸ĺłĺąć§
    canvas.id = "c_n" + attr.length;
    canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + attr.z + ";opacity:" + attr.opacity;
    //ĺ°canvasĺç´ ćˇťĺ ĺ°bodyĺç´ ä¸­
    document.getElementsByTagName("body")[0].appendChild(canvas);
    //čŻĽĺ˝ć°čŽžç˝Žäşcanvasĺç´ çwidthĺąć§ĺheightĺąć§
    getWindowWH();
    //onresize äşäťśäźĺ¨çŞĺŁććĄćśč˘Ťč°ć´ĺ¤§ĺ°ćśĺç
    //ć­¤ĺ¤ĺłä¸şĺ˝çŞĺŁĺ¤§ĺ°ćšĺćśďźéć°čˇĺçŞĺŁçĺŽ˝éŤĺčŽžç˝Žcanvasĺç´ çĺŽ˝éŤ
    window.onresize = getWindowWH;


    //čŻĽĺ˝ć°äźĺžĺ°ĺźç¨äşćŹćäťśçscriptĺç´ ďź
    //ĺ ä¸şćŹćäťśä¸­ĺ¨čľĺźćść§čĄäşä¸ćŹĄgetScriptĺ˝ć°ďźhtmlćäťśĺźç¨ćŹćäťśćśďźćŹćäťśäšĺçscriptć ç­žčżć˛Ąćč˘Ťćľč§ĺ¨č§Łéďź
    //ćäťĽĺžĺ°çscriptć°çťä¸­ďźĺźç¨äşćŹćçscriptĺç´ ĺ¨čŻĽć°çťçćŤĺ°ž
    //čŻĽĺ˝ć°çç¨ćä¸şä˝żĺźĺčč˝ç´ćĽäżŽćšĺ¨htmlä¸­ĺźĺĽčŻĽćäťśçscriptĺç´ çĺąć§ćĽäżŽćšçťĺ¸çä¸äşĺąć§ďźçťĺ¸çz-indexďźéćĺşŚĺĺ°ćšĺć°éďźé˘č˛
    //ä¸ĺé˘ĺžbodyĺç´ ćˇťĺ canvasĺç´ çäťŁç éĺďźĺ˝ĺźĺčćłčŚä˝żç¨čŻĽçšćä˝ä¸şčćŻćśďźĺŞéĺ¨htmlćäťśä¸­ćˇťĺ scriptĺç´ ĺšśĺźç¨ćŹćäťśĺłĺŻ
    function getAttr() {
        let scripts = document.getElementsByTagName("script"),
            len = scripts.length,
            script = scripts[len - 1];//vä¸şćĺä¸ä¸Şscriptĺç´ ďźĺłĺźç¨äşćŹćäťśçscriptĺç´ 
        return {
            length: len,
            z: script.getAttribute("zIndex") || -1,
            opacity: script.getAttribute("opacity") || 0.5,
            color: script.getAttribute("color") || "0,0,0",
            count: script.getAttribute("count") || 99
        }
    }
    //čˇĺžçŞĺŁĺŽ˝éŤďźĺšśčŽžç˝Žcanvasĺç´ ĺŽ˝éŤ
    function getWindowWH() {
        W = canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            H = canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }





    //çćéćşä˝ç˝Žçĺ°ćšĺ
    var random = Math.random,
        squares = [];//ĺ­ćžĺ°ćšĺ

    //ĺžsquares[]ć°çťćžĺ°ćšĺ
    for (let p = 0; p < attr.count; p++) {
        var square_x = random() * W,//ć¨Şĺć 
            square_y = random() * H,//çşľĺć 
            square_xa = 2 * random() - 1,//xč˝´ä˝ç§ť -1,1
            square_ya = 2 * random() - 1;//yč˝´ä˝ç§ť
        squares.push({
            x: square_x,
            y: square_y,
            xa: square_xa,
            ya: square_ya,
            max: 6000
        })
    }

    //çćéź ć ĺ°ćšĺ
    var mouse = {
        x: null,
        y: null,
        max: 20000
    };
    //čˇĺéź ć ćĺ¨ĺć 
    window.onmousemove = function (i) {
        //iä¸şW3C DOMďźwindow.event ä¸ş IE DOMďźäťĽĺŽç°ĺźĺŽšIE
        //ä¸čżçŽĺäźźäšIEĺˇ˛çťćŻćW3C DOMďźćç¨çćŻIE11ďźććł¨éćä¸ä¸ĺĽäťŁç äšč˝ĺŽç°éź ć äş¤äşććďź
        //ç˝ä¸čŻ´7/8/9ćŻä¸ćŻćçďźćŹäşşć˛ĄćčŻéŞďź
        //ĺ˝çśĺ ä¸ćŻć˛Ąćéç
        i = i || window.event;
        mouse.x = i.clientX;
        mouse.y = i.clientY;
    }
    //éź ć ç§ťĺşçŞĺŁĺďźćśé¤éź ć ĺ°ćšĺ
    window.onmouseout = function () {
        mouse.x = null;
        mouse.y = null;
    }


    //çťĺśĺ°ćšĺďźĺ°ćšĺç§ťĺ¨(ç˘°ĺ°čžšçĺĺç§ťĺ¨)ďźĺ°ćšĺĺéź ć ćçź
    var animation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
        window.setTimeout(i, 1000 / 45)
    };//ĺä¸Şćľč§ĺ¨ćŻćçrequestAnimationFrameććä¸ĺďźĺźĺŽšĺä¸Şćľč§ĺ¨

    function draw() {
        //ć¸é¤çťĺ¸
        context.clearRect(0, 0, W, H);

        var w = [mouse].concat(squares);//čżćĽ(ĺĺšś)éź ć ĺ°ćšĺć°çťĺĺśäťĺ°ćšĺć°çť
        var x, v, A, B, z, y;


        //squareĺąć§čĄ¨ďźxďźyďźxaďźyaďźmax
        squares.forEach(function (i) {

            //ĺŽç°ĺ°ćšĺĺŽĺç§ťĺ¨
            i.x += i.xa;
            i.y += i.ya;

            // ć§ĺśĺ°ćšĺç§ťĺ¨ćšĺ
            // ĺ˝ĺ°ćšĺčžžĺ°çŞĺŁčžšçćśďźĺĺç§ťĺ¨
            i.xa = i.xa * (i.x > W || i.x < 0 ? -1 : 1);
            i.ya = i.ya * (i.y > H || i.y < 0 ? -1 : 1);

            //fillRectĺä¸¤ä¸Şĺć°ä¸şçŠĺ˝˘ĺˇŚä¸č§çxďźyĺć ďźĺä¸¤ä¸ŞĺĺŤä¸şĺŽ˝ĺşŚĺéŤĺşŚ
            //çťĺśĺ°ćšĺ
            context.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);

            //éĺwä¸­ććĺç´ 
            for (let n = 0; n < w.length; n++) {
                x = w[n];
                //ĺŚćxä¸iä¸ćŻĺä¸ä¸ŞĺŻščąĄĺŽäžä¸xçxyĺć ĺ­ĺ¨
                if (i !== x && null !== x.x && null !== x.y) {
                    x_diff = i.x - x.x;//iĺxçxĺć ĺˇŽ
                    y_diff = i.y - x.y;//iĺxçyĺć ĺˇŽ
                    distance = x_diff * x_diff + y_diff * y_diff;//ćčžšĺšłćš
                    if (distance < x.max) {
                        //ä˝żiĺ°ćšĺĺéź ć ĺ°ćšĺćçźďźĺłĺŚćiĺ°ćšĺä¸éź ć ĺ°ćšĺčˇçŚťčżĺ¤§ďźiĺ°ćšĺäźč˘Ťéź ć ĺ°ćšĺćçź,
                        //é ć ĺ¤ä¸Şĺ°ćšĺäťĽéź ć ä¸şĺĺżďźmouse.max/2ä¸şĺĺžçťćä¸ĺ
                        if (x === mouse && distance > x.max / 2) {
                            i.x = i.x - 0.03 * x_diff;
                            i.y = i.y - 0.03 * y_diff;
                        }
                        A = (x.max - distance) / x.max;
                        context.beginPath();
                        //čŽžç˝ŽçťçŹççťçşżçç˛çťä¸ä¸¤ä¸Şĺ°ćšĺçčˇçŚťç¸ĺłďźčĺ´0-0.5ďźä¸¤ä¸Şĺ°ćšĺčˇçŚťčśčżçťçşżčśçťďźčžžĺ°maxćśçťçşżćśĺ¤ą
                        context.lineWidth = A / 2;
                        //čŽžç˝ŽçťçŹççťçşżé˘č˛ä¸şs.cĺłçťĺ¸é˘č˛ďźéćĺşŚä¸ş(A+0.2)ĺłä¸¤ä¸Şĺ°ćšĺčˇçŚťčśčżçťçşżčśćˇĄ
                        context.strokeStyle = "rgba(" + attr.color + "," + (A + 0.2) + ")";
                        //čŽžç˝ŽçťçŹççŹč§Śä¸şiĺ°ćšĺ
                        context.moveTo(i.x, i.y);
                        //ä˝żçťçŹççŹč§Śç§ťĺ¨ĺ°xĺ°ćšĺ
                        context.lineTo(x.x, x.y);
                        //ĺŽćçťçşżççťĺśďźĺłçťĺśčżćĽĺ°ćšĺççşż 
                        context.stroke();
                    }
                }
            }
            //ćiĺ°ćšĺäťwć°çťä¸­ĺťć
            //é˛ć­˘ä¸¤ä¸Şĺ°ćšĺéĺ¤čżçşż
            w.splice(w.indexOf(i), 1);
        });

        //window.requestAnimationFrameä¸setTimeoutç¸äźźďźĺ˝˘ćéĺ˝č°ç¨ďź
        //ä¸čżwindow.requestAnimationFrameéç¨çłťçťćśé´é´éďźäżććä˝łçťĺśćç,ćäžäşć´ĺĽ˝ĺ°äźĺďźä˝żĺ¨çťć´ćľç
        //çťčżćľč§ĺ¨äźĺďźĺ¨çťć´ćľçďź
        //çŞĺŁć˛Ąćżć´ťćśďźĺ¨çťĺ°ĺć­˘ďźçčŽĄçŽčľćş;
        animation(draw);
    }

    //ć­¤ĺ¤ćŻç­ĺž0.1ç§ĺďźć§čĄä¸ćŹĄdraw()ďźçć­Łçĺ¨çťćććŻç¨window.requestAnimationFrameĺŽç°ç
    setTimeout(function () {
        draw();
    }, 100)

}();
