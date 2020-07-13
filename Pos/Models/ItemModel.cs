using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;

namespace Pos.Models
{
    public class ItemModel
    {
        public int Id  { get; set; }
        public string Name { get; set; }
        public string Reference { get; set; }
        public bool IsActive { get; set; }

        //public int CategoryId { get; set; }

        public ItemModel()
        {
            IsActive = true;
        }

        public ItemModel(Item dbObject)
        {
            Id = dbObject.Id;
            IsActive = dbObject.IsActive;
            Name = dbObject.Name;
            Reference = dbObject.Reference;
        }

        [HttpGet]
        public static List<ItemModel> GetAll(List<Item> dbObjects)
        {
            List<ItemModel> models = new List<ItemModel>();
            foreach (Item dbObject in dbObjects)
            {
                models.Add(new ItemModel(dbObject));
            }

            return models;
        }

    }
}