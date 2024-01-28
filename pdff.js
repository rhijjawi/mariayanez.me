function openPDF(url, canvasID, id){
    var { pdfjsLib } = globalThis;
    pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.mjs'
    var pdfDoc = null,
      pageNum = 1,
      pageRendering = false,
      pageNumPending = null,
      scale = 0.8,
      canvas = document.getElementById(canvasID),
      ctx = canvas.getContext('2d');

  function renderPage(num) {
    pageRendering = true;

    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale});
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);

      // Wait for rendering to finish
      renderTask.promise.then(function() {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById(`prev-${id}`).addEventListener('click', onPrevPage);

  /**
   * Displays next page.
   */
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById(`next-${id}`).addEventListener('click', onNextPage);

  /**
   * Asynchronously downloads PDF.
   */
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
  });
}

















function openPDF1(url, container) {
  var { pdfjsLib } = globalThis;
  pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.mjs';
  var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 0.1,
    canvases = []

  function renderPage(num , canvas) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function (page) {
      var viewport = page.getViewport({scale : canvas.width / page.getViewport({scale}).width});
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvases[num - 1] = canvas;
      container.appendChild(canvas);

      var renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport,
      };
      var renderTask = page.render(renderContext);

      renderTask.promise.then(function () {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });
  }

  pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    for (let i = 0; i < pdfDoc.numPages; i++){
      const canvas = document.createElement('canvas')
      canvas.id = `canvas_me-`+i
      canvas.classList.add('w-full', 'mb-12', 'h-full', 'w-full', 'overflow-y-scroll')
      document.getElementById('content').appendChild(canvas)
      renderPage(i+1, canvas)
    }
  });
}
