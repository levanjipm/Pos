using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;

namespace Pos.Models
{
    public class ItemModel
    {
        public int Id  { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Reference { get; set; }
        public string SKU { get; set; }
        public double Price1 { get; set; }
        public double Price2 { get; set; }
        public double Price3 { get; set; }
        public int IsDelete { get; set; }
        public int CategoryId { get; set; }

        public ItemModel()
        {
            IsDelete = 0;
        }

        //public ItemModel(Item dbObject)
        //{
        //    Id = dbObject.Id;
        //    Name = dbObject.Name;
        //    Description = dbObject.Description;
        //    Reference = dbObject.Reference;
        //    SKU = dbObject.SKU;
        //    IsDelete = dbObject.IsDelete;
        //}


    }
}