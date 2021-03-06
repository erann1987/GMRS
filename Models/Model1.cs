﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

public partial class Category
{
    public Category()
    {
        this.DataCategory = new HashSet<DataCategory>();
    }

    public int CategoryID { get; set; }
    public string CategoryName { get; set; }

    public virtual ICollection<DataCategory> DataCategory { get; set; }
}

public partial class Data
{
    public Data()
    {
        this.DataCategory = new HashSet<DataCategory>();
    }

    public int ID { get; set; }
    public double Value { get; set; }
    public int ValueTypeID { get; set; }
    public int Year { get; set; }
    public int Month { get; set; }

    public virtual ValueType ValueType { get; set; }
    public virtual ICollection<DataCategory> DataCategory { get; set; }
}

public partial class DataCategory
{
    public int ID { get; set; }
    public int DataID { get; set; }
    public int CategoryID { get; set; }
    public string CategoryDesc { get; set; }

    public virtual Category Category { get; set; }
    public virtual Data Data { get; set; }
}

public partial class ValueType
{
    public ValueType()
    {
        this.Data = new HashSet<Data>();
    }

    public int ValueTypeID { get; set; }
    public string ValueTypeName { get; set; }

    public virtual ICollection<Data> Data { get; set; }
}
