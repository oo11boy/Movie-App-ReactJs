import React, { useState } from 'react';
import moment from 'jalali-moment';

const JsonDateConverter = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [convertedData, setConvertedData] = useState(null);

  const convertDates = () => {
    try {
      const jsonData = JSON.parse(jsonInput);

      const convertedJson = jsonData.map((item) => {
        if (item.year) {
          const originalYear = parseInt(item.year, 10);
          const isYearGreaterThan2000 = originalYear > 2000;

          if (isYearGreaterThan2000) {
            const jalaliYear = moment(originalYear.toString(), 'YYYY').locale('fa').format('jYYYY');
            return { ...item, year: jalaliYear };
          }
        }
        return item;
      });

      setConvertedData(convertedJson);
    } catch (error) {
      console.error('خطا در پارس کردن JSON:', error.message);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="متن JSON را وارد کنید..."
      ></textarea>
      <br />
      <button onClick={convertDates}>تبدیل تاریخ‌ها به شمسی</button>
      {convertedData && (
        <pre>{JSON.stringify(convertedData, null, 2)}</pre>
      )}
    </div>
  );
};

export default JsonDateConverter;
