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
    /// Должности.
    /// </summary>
    // *** Start programmer edit section *** (Должности CustomAttributes)

    // *** End programmer edit section *** (Должности CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностиE", new string[] {
            "Должность as \'Должность\'",
            "КодДолжности as \'Код должности\'"})]
    [View("ДолжностиL", new string[] {
            "Должность as \'Должность\'",
            "КодДолжности as \'Код должности\'"})]
    public class Должности : ICSSoft.STORMNET.DataObject
    {
        
        private string fДолжность;
        
        private int fКодДолжности;
        
        // *** Start programmer edit section *** (Должности CustomMembers)

        // *** End programmer edit section *** (Должности CustomMembers)

        
        /// <summary>
        /// Должность.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Должность CustomAttributes)

        // *** End programmer edit section *** (Должности.Должность CustomAttributes)
        [StrLen(255)]
        public virtual string Должность
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Должность Get start)

                // *** End programmer edit section *** (Должности.Должность Get start)
                string result = this.fДолжность;
                // *** Start programmer edit section *** (Должности.Должность Get end)

                // *** End programmer edit section *** (Должности.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Должность Set start)

                // *** End programmer edit section *** (Должности.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Должности.Должность Set end)

                // *** End programmer edit section *** (Должности.Должность Set end)
            }
        }
        
        /// <summary>
        /// КодДолжности.
        /// </summary>
        // *** Start programmer edit section *** (Должности.КодДолжности CustomAttributes)

        // *** End programmer edit section *** (Должности.КодДолжности CustomAttributes)
        public virtual int КодДолжности
        {
            get
            {
                // *** Start programmer edit section *** (Должности.КодДолжности Get start)

                // *** End programmer edit section *** (Должности.КодДолжности Get start)
                int result = this.fКодДолжности;
                // *** Start programmer edit section *** (Должности.КодДолжности Get end)

                // *** End programmer edit section *** (Должности.КодДолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.КодДолжности Set start)

                // *** End programmer edit section *** (Должности.КодДолжности Set start)
                this.fКодДолжности = value;
                // *** Start programmer edit section *** (Должности.КодДолжности Set end)

                // *** End programmer edit section *** (Должности.КодДолжности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиE", typeof(IIS.Kursovaya_rabota_Borisova_Anna.Должности));
                }
            }
            
            /// <summary>
            /// "ДолжностиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиL", typeof(IIS.Kursovaya_rabota_Borisova_Anna.Должности));
                }
            }
        }
    }
}
