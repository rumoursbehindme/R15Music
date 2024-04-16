"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = void 0;
const defaultLocale = 'en-US';
// TODO: Implement getDate as feature to getStringFormattedDate method
// interface IGetDateAs {
//     day: 'string' | 'number';
//     month: 'string' | 'number';
//     year: 'string' | 'number';
// }
// const defaultGetDateAsOptions: IGetDateAs = {
//     day: 'number',
//     month: 'number',
//     year: 'number'
// };
class DateHelper {
    static getFormattedDate() {
        return `/Date(${Date.now()})/`;
    }
    /**
     * creates a new date with passed seconds.
     * it will add this seconds to 1st Jan 1970 and returns the Date
     * ex: if seconds is 31536000(1 year) then the return date will be '1st Jan 1971'
     * @param seconds
     * @returns Date
     */
    static getDateBySeconds(seconds) {
        return new Date(seconds * 1000);
    }
    /**
     *
     * @param date
     * @returns seconds
     */
    static getCurrentDateDifference(date) {
        return Math.floor((date - Date.now()) / 1000);
    }
    static getNextYear(date = new Date()) {
        return new Date(date.setFullYear(date.getFullYear() + 1));
    }
    static getPreviousYear(date = new Date()) {
        return new Date(date.setFullYear(date.getFullYear() - 1));
    }
    static addYears(number, date = new Date()) {
        return new Date(date.setFullYear(date.getFullYear() + number));
    }
    static addMinutes(number, date = new Date()) {
        return new Date(date.setMinutes(date.getMinutes() + number));
    }
    static addSeconds(addTimeInSeconds, date = new Date()) {
        return new Date(date.setSeconds(date.getSeconds() + addTimeInSeconds));
    }
    static addDays(number, date = new Date()) {
        return new Date(date.setDate(date.getDate() + number));
    }
    /*TODO: This function needs to be deprecated */
    static getUTCDate(input) {
        const date = input ? new Date(input) : new Date();
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getMilliseconds()));
    }
    static getDaysDifference(fromDate, toDate) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((fromDate.getTime() - toDate.getTime()) / oneDay));
    }
    static getWeekDay(date, locale = defaultLocale) {
        return date.toLocaleString(locale, { weekday: 'long' });
    }
    static getDay(date, locale = defaultLocale) {
        return date.toLocaleString(locale, { day: 'numeric' });
    }
    static getMonth(date, locale = defaultLocale) {
        return date.toLocaleString(locale, { month: 'long' });
    }
    static getTime(date) {
        return date.toLocaleTimeString();
    }
    static getTimeZone(date, locale = defaultLocale) {
        try {
            return date.toLocaleDateString(locale, { timeZoneName: 'long' }).split(',')[1];
        }
        catch {
            return '';
        }
    }
    static isValidDate(date) {
        const d = new Date(date);
        return (d instanceof Date && !isNaN(d));
    }
    static getLogFormattedDate(now = new Date()) {
        const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
        return `${date} ${time}`;
    }
    static getDateAndDurationContent = (maintenanceDate, maintenanceLength) => {
        const { getWeekDay, getMonth, getDay, getTime } = this;
        const upComingMaintenance = `Upcoming Maintenance : ${getWeekDay(maintenanceDate)}, ${getMonth(maintenanceDate)} ${getDay(maintenanceDate)} ${getTime(maintenanceDate)}`;
        const maintenanceLengthcontent = maintenanceLength ? `, for ${maintenanceLength} hour.` : '.';
        return upComingMaintenance + maintenanceLengthcontent;
    };
    static convertWCFDateToUTC = (inputDate) => {
        const regex = /\/Date\((\d+)([+-]\d+)\)\//;
        const matchRegex = inputDate.match(regex);
        if (matchRegex && matchRegex.length === 3) {
            const timestamp = Number(matchRegex[1]);
            const offset = Number(matchRegex[2]);
            const date = this.getUTCDate(timestamp + offset);
            return date;
        }
    };
    static getStringFormattedDate = (date, format = 'dd/mm/yyyy') => {
        const day = date.getDate();
        const month = this.getMonth(date);
        const year = date.getFullYear();
        switch (format) {
            case 'dd/mm/yyyy':
                return `${day} ${month} ${year}`;
            case 'mm/dd/yyyy':
                return `${month} ${day} ${year}`;
            case 'yyyy/mm/dd':
                return `${year} ${month} ${day}`;
            default:
                return `${day} ${month} ${year}`;
        }
    };
}
exports.DateHelper = DateHelper;
