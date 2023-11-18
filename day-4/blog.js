let dataBlog = []

function submitData(event) {
    event.preventDefault()

    let inputProject = document.getElementById("pName").value
    let inputDesc = document.getElementById("description").value
    let startdate   = new Date( document.getElementById("s-date").value)
    let enddate   = new Date( document.getElementById("e-date").value)
    let inputImage = document.getElementById("chooseFile").files
    
     const nodeJs = document.getElementById("tech1").checked
     const reactJs = document.getElementById("tech2").checked
     const nextJs = document.getElementById("tech3").checked
    const  typescript = document.getElementById("tech4").checked
    
  // set jam menjadi jam 12 malam, atau 00
startdate.setHours(0, 0, 0, 0);
enddate.setHours(0, 0, 0, 0);
 
const selisih = Math.abs(startdate - enddate);
// Selisih akan dalam millisecond atau mili detik
 
const hariDalamMillisecond = 1000 * 60 * 60 * 24; // 1000 * 1 menit * 1 jam * 1 hari
 
const selisihTanggal = Math.round(selisih / hariDalamMillisecond);
// Hasilnya adalah 8 hari

    

  inputImage = URL.createObjectURL(inputImage[0])
   

    const blog = {
        inputProject,
        inputDesc,
        inputImage,
        enddate,
        nodeJs,
        reactJs,
        nextJs,
        typescript,
        selisihTanggal,

       
    }

    dataBlog.push(blog)
    console.log("dataBlog", dataBlog)
    renderBlog()
}
function renderBlog() {
    document.getElementById("container2").innerHTML = ''
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("container2").innerHTML += `
        
        <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${dataBlog[index].inputImage}" alt="" />
                    </div>
                    <div class="blog-content">
                        <h1>
                            <a href="detail_blog.html" target="_blank">${dataBlog[index].inputProject}</a>
                        </h1>
                        <div class="detail-blog-content">
                          <h3> Durasi : ${dataBlog[index].selisihTanggal} Hari</h3>
                        </div>
                        <p>
                        ${dataBlog[index].inputDesc}
                        </p>
                        <div style="margin-bottom :5px;">
                        ${dataBlog[index].nodeJs ?  `<i class="fa-brands fa-node fa-xl"></i>` : ""}
                        ${dataBlog[index].reactJs ? `<i class="fa-brands fa-react fa-sm"></i>` : ""}
                        ${dataBlog[index].nextJs ? `<i class="fa-brands fa-node-js fa-xl"></i>` : ""}
                        ${dataBlog[index].typescript ? `<i class="fa-brands fa-js fa-xl"></i>` : ""}
                        </div>
                        <div class="btn-group">
                            <button class="btn-edit">Edit Post</button>
                            <button class="btn-post">Delete Post</button>
                        </div>
                    </div>
                </div>`
    }
}
function validasi() {
    var valid = false;
    if (document.getElementById("tech1").checked){
        valid = true;
    } else  if (valid = true){
        alert ("sukses euy")

    } else {
        alert ("jirlah gagal")
        return false;
    }
    
}