var confettiSVG = '<svg width="356" height="106" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M334.01 38.293c3.121 4.973 8.76 8.18 14.968 8.54.14 0 1.134-1.146 1.064-1.08.849-.884 1.667-1.734 2.482-2.617.815-.884 1.667-1.767 2.482-2.65.142-.164.852-1.113.994-1.113-6.207-.36-11.846-3.566-14.968-8.54.106.163-3.263 3.37-3.546 3.697-.32.327-3.689 3.436-3.476 3.763z" fill="#FFBC1F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47 100.849c2.28 1.004 4.594 1.979 6.875 2.982.188.086 3-5.074 3.125-5.017-2.282-1.003-4.594-1.978-6.875-2.98-.188-.088-3.031 5.044-3.125 5.015z" fill="#FF8164"/><path fill-rule="evenodd" clip-rule="evenodd" d="M86.033 46.45c1.484 2.982 4.863 4.714 8.382 4.33.206-.033.758-2.085.827-2.31.069-.224.586-2.308.758-2.308-3.517.384-6.862-1.347-8.38-4.33.172.322-.69 1.957-.828 2.31-.138.416-.965 1.891-.76 2.308z" fill="#3F67F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M138.982 22.944c-2.296 2.303-2.612 5.247-.871 7.81.12.175 2.692 0 3.01 0 .316 0 2.89-.174 3.009-.028-1.742-2.565-1.386-5.509.87-7.811-.157.175-2.652 0-3.009 0-.435 0-2.771-.204-3.009.029z" fill="#FF8164"/><path fill-rule="evenodd" clip-rule="evenodd" d="M86.98-2.162C85.333-.77 83.65.592 82 1.984c.103-.09 3.847 2.992 4.02 2.843C87.667 3.435 89.35 2.073 91 .681c-.138.089-3.847-2.992-4.02-2.843z" fill="#3F67F2"/><mask id="a" maskUnits="userSpaceOnUse" x="0" y="19" width="8" height="11"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.922h7.967v9.37H0v-9.37z" fill="#fff"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.93 19.922L.007 26.375c-.211.353 4.205 2.621 4.03 2.917 1.306-2.15 2.614-4.302 3.923-6.453.212-.354-4.241-2.622-4.03-2.917z" fill="#3F67F2"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M252.116-.732c-.523 3.172.734 6.259 3.492 8.553.14.142 2.9-1.077 3.214-1.19.28-.113 3.038-1.33 3.178-1.246-2.758-2.266-4.051-5.38-3.492-8.553-.036.227-2.864 1.049-3.214 1.19-.419.17-3.108.907-3.178 1.246z" fill="#FF8164"/><path fill-rule="evenodd" clip-rule="evenodd" d="M191.065 40.528c3.079 1.111 6.159 2.193 9.237 3.304-.105-.028.35-2.62.35-2.848.035-.256.524-2.762.28-2.848-3.079-1.11-6.158-2.193-9.237-3.304.104.029-.35 2.62-.35 2.849 0 .256-.525 2.762-.28 2.847z" fill="#30D6AF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M192 1.832h7.62c.19 0 .303-5 .38-5h-7.621c-.152 0-.304 5-.379 5z" fill="#FA7697"/></svg>';

var anouncementContainerStyles = {
    'background-color' : "#24AFE0",
    'width' : "100%",
    'height' : "106px",
    'display' : "flex",
    'align-items' : "center",
    'justify-content' : "center",
    'padding-top' : "10px",
}

var headerStyles = {
    'font-style' : "normal",
    'font-weight' : "normal",
    'font-size' : "2vw",
    'letter-spacing' : "-0.02em",
    'text-align' : "center",
    'color' : "#ffffff",
    'margin-top' : "15px",
    'margin-bottom' : "5px",
}

var textStyles = {
    'color' : "#ffffff",
    'font-style' : "normal",
    'font-weight' : "bold",
    'font-size' : "2.5vw",
    'letter-spacing' : "-0.02em",
    'text-align' : "center",
    'margin-top' : "5px",
}

var discountStyles = {
    'color' : "#24AFE0",
    'background' : "#ffffff",
    'border-radius': "50px",
    'font-style' : "italic",
    'font-weight' : "bold",
    'font-size' : "1.5vw",
    'letter-spacing' : "-0.02em",
    'text-align' : "center",
    'margin-left' : "10px",
    'padding' : "12px"
}

class cssTextCreator {

    createCSS (styles) {
        var cssText = '';
        for (const property in styles) {
            cssText += property + ':'  + styles[property] + '; ';
        };

        return cssText;
    }
}

class AnouncementContainer {
    
    constructor (cssText, text, discount) {
        this.cssText =cssText;
        this.text = text;
        this.discount = discount;
        this.body = document.getElementsByTagName("BODY")[0];
    }

    normalize () {
        var body = this.body;
        body.style.margin = 0;
    }

    render () {
        var container = document.createElement("div");
        container.style.cssText = this.cssText;
        return container;
    }

    placeInDOM () {
        var body = this.body;
        var anouncementContainer = this.render();
        var text = this.text.render();
        var discount = this.discount.render();
        var svgContainer1 = document.createElement("div");
        var svgContainer2= document.createElement("div");
        var svgContainer3 = document.createElement("div");
        svgContainer1.innerHTML = confettiSVG;
        svgContainer1.style.position = "absolute";
        svgContainer1.style.right = "20px";
        svgContainer1.style.top = "-10px";
        svgContainer2.innerHTML = confettiSVG;
        svgContainer2.style.position = "absolute";
        svgContainer2.style.left = "20px";
        svgContainer3.innerHTML = confettiSVG;
        svgContainer3.style.position = "absolute";
        svgContainer3.style.top = "-20px";
        anouncementContainer.insertBefore(discount, anouncementContainer.firstChild);
        anouncementContainer.insertBefore(text, anouncementContainer.firstChild);
        anouncementContainer.insertBefore(svgContainer1, anouncementContainer.firstChild);
        anouncementContainer.insertBefore(svgContainer2, anouncementContainer.firstChild);
        anouncementContainer.insertBefore(svgContainer3, anouncementContainer.firstChild);
        body.insertBefore(anouncementContainer, body.firstChild);
    }
}

class Text {
    constructor (headerText, text, headerCssText, textCssText) {
        this.headerCssText = headerCssText;
        this.textCssText = textCssText;
        this.header = headerText;
        this.text = text;
    }

    render () {
        var div = document.createElement("div");
        var h2 = document.createElement("h2");
        var text = document.createElement("p");

        text.style.cssText = this.textCssText;
        text.innerHTML = this.text;
        h2.style.cssText = this.headerCssText;
        h2.innerHTML = this.header;
        div.insertBefore(text, div.firstChild);
        div.insertBefore(h2, div.firstChild);

        return div;
    }
}

class Discount {
    constructor (discount, cssText) {
        this.cssText = cssText;
        this.discount = discount;
        this.discountColor = "#FFFFFF";
    }

    render () {
        var span = document.createElement("span");
        span.style.cssText = this.cssText;
        span.innerHTML = '%' + this.discount;
        return span;
    }
}

class AnounceCreator {

    initialize (options) {
        var cssCreator = new cssTextCreator()
        var discount, text, anouncementContainer, discountRate;

        discountRate = options.text.discountRate ? options.text.discountRate : 10;

        if (options.style && options.style.discountStyles) {
            discount = new Discount(discountRate, cssCreator.createCSS(options.style.discountStyles));
        } else {
            discount = new Discount(discountRate, cssCreator.createCSS(discountStyles));
        }

        if (options.style && options.style.headerStyles) {
            headerStyles = options.style.headerStyles;
        }
        if (options.style && options.style.textStyles) {
            textStyles = options.style.textStyles;
        }

        var text = new Text(options.text.title, options.text.subtitle, cssCreator.createCSS(headerStyles), cssCreator.createCSS(textStyles));

        if (options.anouncementContainerStyles) {
            anouncementContainer = new AnouncementContainer(cssCreator.createCSS(options.anouncementContainerStyles), text, discount);
        } else {
            anouncementContainer = new AnouncementContainer(cssCreator.createCSS(anouncementContainerStyles), text, discount);
        }

        anouncementContainer.normalize();
        anouncementContainer.placeInDOM();
    }
}