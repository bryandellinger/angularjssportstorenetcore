using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace angularsportsstorenetcore2.Models
{
    public class Order
    {
        public long ID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
        public bool Giftwrap { get; set; }
        [NotMapped]
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<OrderProductJunction> OrderProductJunctions { get; set; }

    }
}

