﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_rabota_Borisova_Anna
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав услуги.
    /// </summary>
    // *** Start programmer edit section *** (СоставУслуги CustomAttributes)

    // *** End programmer edit section *** (СоставУслуги CustomAttributes)
    [AutoAltered()]
    [Caption("Состав услуги")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставУслугиE", new string[] {
            "Единицы as \'Единицы\'",
            "Количество as \'Количество\'"})]
    public class СоставУслуги : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Kursovaya_rabota_Borisova_Anna.Единицы fЕдиницы;
        
        private string fКоличество;
        
        private IIS.Kursovaya_rabota_Borisova_Anna.Товар fТовар;
        
        private IIS.Kursovaya_rabota_Borisova_Anna.Услуга fУслуга;
        
        // *** Start programmer edit section *** (СоставУслуги CustomMembers)

        // *** End programmer edit section *** (СоставУслуги CustomMembers)

        
        /// <summary>
        /// Единицы.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Единицы CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Единицы CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Borisova_Anna.Единицы Единицы
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get start)
                IIS.Kursovaya_rabota_Borisova_Anna.Единицы result = this.fЕдиницы;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set start)
                this.fЕдиницы = value;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Количество CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Количество CustomAttributes)
        [StrLen(255)]
        public virtual string Количество
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Get start)

                // *** End programmer edit section *** (СоставУслуги.Количество Get start)
                string result = this.fКоличество;
                // *** Start programmer edit section *** (СоставУслуги.Количество Get end)

                // *** End programmer edit section *** (СоставУслуги.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Set start)

                // *** End programmer edit section *** (СоставУслуги.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (СоставУслуги.Количество Set end)

                // *** End programmer edit section *** (СоставУслуги.Количество Set end)
            }
        }
        
        /// <summary>
        /// Состав услуги.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Товар CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Товар CustomAttributes)
        [PropertyStorage(new string[] {
                "Товар"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Borisova_Anna.Товар Товар
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Товар Get start)

                // *** End programmer edit section *** (СоставУслуги.Товар Get start)
                IIS.Kursovaya_rabota_Borisova_Anna.Товар result = this.fТовар;
                // *** Start programmer edit section *** (СоставУслуги.Товар Get end)

                // *** End programmer edit section *** (СоставУслуги.Товар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Товар Set start)

                // *** End programmer edit section *** (СоставУслуги.Товар Set start)
                this.fТовар = value;
                // *** Start programmer edit section *** (СоставУслуги.Товар Set end)

                // *** End programmer edit section *** (СоставУслуги.Товар Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya_rabota_Borisova_Anna.Услуга.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Услуга CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Услуга CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Услуга"})]
        public virtual IIS.Kursovaya_rabota_Borisova_Anna.Услуга Услуга
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get start)
                IIS.Kursovaya_rabota_Borisova_Anna.Услуга result = this.fУслуга;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set start)
                this.fУслуга = value;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставУслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставУслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставУслугиE", typeof(IIS.Kursovaya_rabota_Borisova_Anna.СоставУслуги));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставУслуги.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)
    public class DetailArrayOfСоставУслуги : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya_rabota_Borisova_Anna.DetailArrayOfСоставУслуги members)

        // *** End programmer edit section *** (IIS.Kursovaya_rabota_Borisova_Anna.DetailArrayOfСоставУслуги members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставУслуги by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставУслуги.
        /// </summary>
        public DetailArrayOfСоставУслуги(IIS.Kursovaya_rabota_Borisova_Anna.Услуга fУслуга) : 
                base(typeof(СоставУслуги), ((ICSSoft.STORMNET.DataObject)(fУслуга)))
        {
        }
        
        public IIS.Kursovaya_rabota_Borisova_Anna.СоставУслуги this[int index]
        {
            get
            {
                return ((IIS.Kursovaya_rabota_Borisova_Anna.СоставУслуги)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya_rabota_Borisova_Anna.СоставУслуги dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
