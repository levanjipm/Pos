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
        
        public JsonResult GetAll(int? skip = null, int? take)
        {
            PosEntities db = new PosEntities();
            List<ItemModel> items = new List<ItemModel>();
            //if (skip == null)
            //{
            //    items = ItemModel.GetAll(db.Items.ToList());
            //} else
            //{
            //    items = ItemModel.GetAll(db.Items.ToList()).Take(take).Skip(skip);
            //}
            //items = db.Items.Select(dbObject => new ItemModel(dbObject)).ToList();
            

            return Json(items, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create(ItemModel model)
        {

            return RedirectToAction("Index");
        }
    }
}