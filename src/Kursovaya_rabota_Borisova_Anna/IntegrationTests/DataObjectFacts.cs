﻿/*
 * В этом файле можно настраивать поведение тестов.
 */
namespace IIS.Kursovaya_rabota_Borisova_Anna
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public partial class DataObjectFacts
    {
        /// <summary>
        /// Получить классы объектов данных,
        /// которые не требуется вычитывать из БД.
        /// </summary>
        /// <returns>Список классов, которые не требуется вычитывать из БД.</returns>
        private partial IEnumerable<Type> GetNotSelectableTypes()
        {
            return Enumerable.Empty<Type>();
        }
    }
}
