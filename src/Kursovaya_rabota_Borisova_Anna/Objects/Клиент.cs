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
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [Caption("Клиенты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "КодКлиента as \'Код клиента\'",
            "ФИО as \'ФИО\'",
            "НомерТелефона as \'Номер телефона\'",
            "ДатаРождения as \'Дата рождения\'",
            "Пол as \'Пол\'"})]
    [View("КлиентL", new string[] {
            "КодКлиента as \'Код клиента\'",
            "ФИО as \'ФИО\'",
            "НомерТелефона as \'Номер телефона\'",
            "ДатаРождения as \'Дата рождения\'",
            "Пол as \'Пол\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКлиента;
        
        private string fФИО;
        
        private int fНомерТелефона;
        
        private string fmail;
        
        private System.DateTime fДатаРождения;
        
        private IIS.Kursovaya_rabota_Borisova_Anna.Пол fПол;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// mail.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.mail CustomAttributes)

        // *** End programmer edit section *** (Клиент.mail CustomAttributes)
        [StrLen(255)]
        private string mail
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.mail Get start)

                // *** End programmer edit section *** (Клиент.mail Get start)
                string result = this.fmail;
                // *** Start programmer edit section *** (Клиент.mail Get end)

                // *** End programmer edit section *** (Клиент.mail Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.mail Set start)

                // *** End programmer edit section *** (Клиент.mail Set start)
                this.fmail = value;
                // *** Start programmer edit section *** (Клиент.mail Set end)

                // *** End programmer edit section *** (Клиент.mail Set end)
            }
        }
        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Клиент.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ДатаРождения Get start)

                // *** End programmer edit section *** (Клиент.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Клиент.ДатаРождения Get end)

                // *** End programmer edit section *** (Клиент.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ДатаРождения Set start)

                // *** End programmer edit section *** (Клиент.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Клиент.ДатаРождения Set end)

                // *** End programmer edit section *** (Клиент.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// КодКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.КодКлиента CustomAttributes)

        // *** End programmer edit section *** (Клиент.КодКлиента CustomAttributes)
        public virtual int КодКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.КодКлиента Get start)

                // *** End programmer edit section *** (Клиент.КодКлиента Get start)
                int result = this.fКодКлиента;
                // *** Start programmer edit section *** (Клиент.КодКлиента Get end)

                // *** End programmer edit section *** (Клиент.КодКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.КодКлиента Set start)

                // *** End programmer edit section *** (Клиент.КодКлиента Set start)
                this.fКодКлиента = value;
                // *** Start programmer edit section *** (Клиент.КодКлиента Set end)

                // *** End programmer edit section *** (Клиент.КодКлиента Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Клиент.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// Пол.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Пол CustomAttributes)

        // *** End programmer edit section *** (Клиент.Пол CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Borisova_Anna.Пол Пол
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Пол Get start)

                // *** End programmer edit section *** (Клиент.Пол Get start)
                IIS.Kursovaya_rabota_Borisova_Anna.Пол result = this.fПол;
                // *** Start programmer edit section *** (Клиент.Пол Get end)

                // *** End programmer edit section *** (Клиент.Пол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Пол Set start)

                // *** End programmer edit section *** (Клиент.Пол Set start)
                this.fПол = value;
                // *** Start programmer edit section *** (Клиент.Пол Set end)

                // *** End programmer edit section *** (Клиент.Пол Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ФИО CustomAttributes)

        // *** End programmer edit section *** (Клиент.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ФИО Get start)

                // *** End programmer edit section *** (Клиент.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Клиент.ФИО Get end)

                // *** End programmer edit section *** (Клиент.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ФИО Set start)

                // *** End programmer edit section *** (Клиент.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Клиент.ФИО Set end)

                // *** End programmer edit section *** (Клиент.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Kursovaya_rabota_Borisova_Anna.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Kursovaya_rabota_Borisova_Anna.Клиент));
                }
            }
        }
    }
}
