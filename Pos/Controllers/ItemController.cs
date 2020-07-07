using Pos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Pos.Controllers
{
    public class ItemController : Controller
    {
        // GET: Item
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult GetAll()
        {
            ItemModel model = new ItemModel
            {
                Id = 1,
                Name = "haha"
            };
            JsonResult jsonResult = new JsonResult();
            jsonResult.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            jsonResult.Data = model;
            return jsonResult;
        }
    }
}