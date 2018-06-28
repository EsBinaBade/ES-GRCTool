using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{
    [Produces("application/json")]
    public class OrganizationChartController : Controller
    {
        private readonly IHostingEnvironment _env;

        public OrganizationChartController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpPost]
        [Route("api/uploadImage")]
        public async Task <IActionResult> UploadImage( UploadViewModel model)
        {
            var file = model.File;

            if (file.Length > 0)
            {
                string path = Path.Combine(_env.WebRootPath, "images");

                using (var fs = new FileStream(Path.Combine(path, file.FileName), FileMode.Create))
                {
                    await file.CopyToAsync(fs);

                }
                model.Source = $"/images{file.FileName}";
                model.Extension = Path.GetExtension(file.FileName).Substring(1);
                return Ok(model);
            }

            return BadRequest();

            //if (file == null) throw new Exception("File is null");
            //if (file.Length == 0) throw new Exception("File is empty");

            //using (Stream stream = file.OpenReadStream())
            //{
            //    using (var binaryReader = new BinaryReader(stream))
            //    {
            //        var fileContent = binaryReader.ReadBytes((int)file.Length);
            //        await _uploadService.AddFile(fileContent, file.FileName, file.ContentType);
            //    }
            //}
        }

    }
}