const folders = {
    'About Me' : {
        'text' : ['The day I realized I can’t have it all was the day I realized choices matter, that I will always miss out on something. I knew then, I was truly free, because when there’s missing, there’s greatness and a life worth living.',
        'My name is Maria Yanez, I’m a copywriter born in Venezuela, raised in Canary Islands, coming from Madrid and currently based in Berlin, Germany.',
        'I believe in the observation of humans and life simplest things to be my source of inspiration, so that I can have the chance to make a plot twist.']
    },
    'My Works' : {
        files : [
            ['Pass me the Ketchup', 'PassMeTheKetchup_SantaCruz.pdf', null],
            ['Artworks', 'Artworks.pdf', null],
            ['Headspace Headlines', 'Headspace_headlines-2.pdf', null],
            ['Enjoy a Day Off', 'EnjoyADayOff_BerlinCampaign.pdf', null],
            ['Mini-Campaigns', 'MiniCampaigns.pdf', null],
            ['It\'s Knuts', 'Project_ItsKnuts.pdf', null]
        ]
    },
}
function addEmail(){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = './images/mail.png';
    img.classList.add('w-16', 'block','cursor-pointer', 'mx-auto');
    p.innerText = 'Contact Me';
    p.classList.add('max-w-full', 'text-center','cursor-pointer', 'whitespace-nowrap', 'font-thin')
    div.classList.add( 'cursor-pointer', 'col-start-1', 'h-fit', 'max-h-fit')
    div.appendChild(img);
    div.appendChild(p)
    div.addEventListener("click", ()=>{
        open('mailto:maferyago@gmail.com', "_blank")
        navigator.clipboard.writeText('maferyago@gmail.com')
    })
    document.getElementById('contact').appendChild(div);
}
function addLinkedIn(){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = './images/in.png';
    img.classList.add('w-16', 'block','cursor-pointer', 'mx-auto');
    p.innerText = 'LinkedIn';
    p.classList.add('max-w-full', 'text-center','cursor-pointer', 'whitespace-nowrap', 'font-thin')
    div.classList.add('cursor-pointer',  'col-start-2', 'h-fit', 'max-h-fit')
    div.appendChild(img);
    div.appendChild(p)
    div.addEventListener("click", ()=>{open('https://www.linkedin.com/in/mariayanezcopy', "_blank")})
    document.getElementById('contact').appendChild(div);
}
function addInstagram(){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = './images/insta.png';
    img.classList.add('w-16', 'block','cursor-pointer', 'mx-auto');
    p.innerText = 'Instagram';
    p.classList.add('max-w-full', 'text-center','cursor-pointer', 'whitespace-nowrap', 'font-thin')
    div.classList.add('cursor-pointer',  'col-start-3', 'h-fit', 'max-h-fit')
    div.appendChild(img);
    div.appendChild(p)
    div.addEventListener("click", ()=>{open('https://www.instagram.com/mariafernandayanez_/w', "_blank")})
    document.getElementById('contact').appendChild(div);
}
function addEvents(id){
    if (id == 2){
        var elem = document.getElementsByClassName("videoDiv");
            elem[0].addEventListener("click", ()=>window.open(`/videos/${folders["Videos"].files[0][1]}` , "_blank"));
            elem[1].addEventListener("click", ()=>window.open(`/videos/${folders["Videos"].files[1][1]}` , "_blank"), false);
            elem[2].addEventListener("click", ()=>window.open(`/videos/${folders["Videos"].files[2][1]}` , "_blank"), false);
    }
    if (id == 1){
        var PDFelem = document.getElementsByClassName("pdfs");
        for (let j = 0; j < PDFelem.length; j++) {
            console.log(j)
            const element = document.getElementById(`pdf-${j}`);
            try {
                const buttonElement = document.getElementById(`button-${j}`);
                buttonElement.addEventListener('click', ()=>{open(`./pdfs/${folders["My Works"].files[j][1]}`, '_blank')})
            } catch (error) {
            }
            element.addEventListener('click', ()=>{open(`./pdfs/${folders["My Works"].files[j][1]}`, '_blank')})
        }
    }
 };
for (i of Object.keys(folders)){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = './images/folder.png';
    img.classList.add('w-16', 'block','cursor-pointer', 'mx-auto');
    p.innerText = i;
    p.classList.add('max-w-full', 'text-center','cursor-pointer', 'whitespace-nowrap', 'font-thin')
    div.classList.add('my-12', 'mx-auto', 'w-fit', 'cursor-pointer', 'relative')
    div.appendChild(img);
    div.appendChild(p)
    div.id = Object.keys(folders).indexOf(i)
    div.onclick = (e) => {
        document.getElementById('content').innerHTML = ''
        if (e.target.parentElement.id == 0){
            container = document.getElementById('content')
            container.classList.remove('px-12')
            openPDF1(`./pdfs/aboutme_maria_.pdf`, container)
        }
        else if (e.target.parentElement.id == 1){
            for (i of folders["My Works"].files){
                let button;
                if (folders["My Works"].files.indexOf(i) == 5){
                    button = document.createElement('button')
                    button.innerText = 'Click for Interactive Content'
                    button.className = ' mx-auto right-0 left-0 -bottom-12 absolute w-fit py-[0.2rem] px-1 bg-gray-300 border border-black rounded'
                    button.onclick = () => {open('https://www.canva.com/design/DAEK7_VPBTw/1YsnBSS247YiVM73PlBUQw/view', '_blank')}
                }
                else {
                    button = document.createElement('button')
                    button.innerText = 'View PDF'
                    button.className = ' mx-auto right-0 left-0 -bottom-12 absolute w-fit py-[0.2rem] px-1 bg-gray-300 border border-black rounded'
                    button.id = `button-${folders["My Works"].files.indexOf(i)}`
                }
                const div = document.createElement('div')
                div.className = 'w-fit mx-auto mb-24 relative';
                const p = document.createElement('p');
                p.className = 'text-xl font-bold pb-2'
                const canvas = document.createElement('canvas');
                canvas.id = `pdf-${folders["My Works"].files.indexOf(i)}`
                canvas.classList = 'max-w-xl pdfs rounded-lg cursor-pointer'
                const buttonPrev = document.createElement('button')
                const buttonNext = document.createElement('button')
                buttonPrev.id = `prev-${folders["My Works"].files.indexOf(i)}`;
                buttonNext.id = `next-${folders["My Works"].files.indexOf(i)}`;
                buttonNext.innerText = ">"
                buttonPrev.innerText = "<"
                buttonNext.classList.add('float-right', 'px-3', 'mt-1', 'bg-gray-300', 'rounded-md', 'border', 'border-black')
                buttonPrev.classList.add('float-left', 'px-3', 'mt-1', 'bg-gray-300', 'rounded-md', 'border', 'border-black')

                p.classList.add('mt-5')
                p.innerText = i[0]

                div.appendChild(p)
                div.appendChild(canvas)
                div.appendChild(buttonPrev)
                div.appendChild(buttonNext)
                try{
                    div.appendChild(button)
                }
                catch {}
                document.getElementById('content').appendChild(div);
                document.getElementById('content').scrollTop = 0;
                openPDF(`./pdfs/${i[1]}`, `pdf-${folders["My Works"].files.indexOf(i)}`, folders["My Works"].files.indexOf(i))
            }
        }
        else if (e.target.parentElement.id == 2){
            for (i of folders["Videos"].files){
                const div = document.createElement('div')
                div.className = 'h-24 videoDiv mx-auto my-20 mr-24 inline-block cursor-pointer';
                const img = document.createElement('img');
                img.className = 'h-full mx-auto'
                img.src = './images/mkv.png'
                div.id = `vid-`+folders["Videos"].files.indexOf(i)
                const p = document.createElement('p');
                p.className = 'max-w-full font-semibold text-center cursor-pointer whitespace-nowrap font-thin'
                p.innerText = i[0]
                div.appendChild(img)
                div.appendChild(p)
                document.getElementById('content').appendChild(div);
                document.getElementById('content').scrollTop = 0;
            }
        }
        else {
            document.getElementById('content').innerText = ''
        }
        addEvents(e.target.parentElement.id);
        
        document.getElementById('window').hidden = !document.getElementById('window').hidden
    }
    document.getElementById('parent').appendChild(div);
}
addEmail();
addLinkedIn();
addInstagram();
