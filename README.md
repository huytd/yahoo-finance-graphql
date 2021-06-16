# Yahoo Finance GraphQL API

A GraphQL API for fetching data from Yahoo Finance, thanks to [node-yahoo-finance2](https://github.com/gadicc/node-yahoo-finance2/).

Available APIs:

- [quote](https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/quote.md)
- [autoc](https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/autoc.md)
- [trendingSymbols](https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/trendingSymbols.md)
- [historical](https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/historical.md)

Examples:

**Get historical data since 01/01/2021:**

<table>
  <tr><td>**Query**</td><td>**Response**</td></tr>
  <tr>
    <td>
    ```
    query {
      historicalData(
        symbol: "IBM"
        from: "2021-01-01"
        to: ""
        interval: "1d"
      ) {
        open
        close
        high
        low
      }
    }
    ```
    </td>
    <td>
    ```

    ```
    </td>
  </tr>
</table>

**Get top 10 trending symbols with quote:**

<table>
  <tr><td>**Query**</td><td>**Response**</td></tr>
  <tr>
    <td>
    ```
    query {
      trendingSymbols(count: 3) {
        symbol,
        quote {
          displayName,
          regularMarketPrice,
          regularMarketChange,
          regularMarketChangePercent
        }
      }
    }
    ```
    </td>
    <td>
    ```
    {
      "data": {
        "trendingSymbols": [
          {
            "symbol": "ORPH",
            "quote": {
              "displayName": null,
              "regularMarketPrice": 16.21,
              "regularMarketChange": 6.159999,
              "regularMarketChangePercent": 61.293518
            }
          },
          {
            "symbol": "CVAC",
            "quote": {
              "displayName": "CureVac",
              "regularMarketPrice": 94.79,
              "regularMarketChange": -3.409996,
              "regularMarketChangePercent": -3.472501
            }
          },
          {
            "symbol": "VINO",
            "quote": {
              "displayName": "Gaucho",
              "regularMarketPrice": 7.98,
              "regularMarketChange": 3.8899999,
              "regularMarketChangePercent": 95.110016
            }
          }
        ]
      }
    }
    ```
    </td>
  </tr>
</table>

**Auto complete stock's symbol:**

<table>
  <tr><td>**Query**</td><td>**Response**</td></tr>
  <tr>
    <td>
    ```
    query {
      autoComplete(query: "IB") {
        symbol
        name
      }
    }
    ```
    </td>
    <td>
    ```
    {
      "data": {
        "autoComplete": [
          {
            "symbol": "IBBQ",
            "name": "Invesco Nasdaq Biotechnology ETF"
          },
          {
            "symbol": "IBM",
            "name": "International Business Machines Corporation"
          },
          {
            "symbol": "IBIO",
            "name": "iBio, Inc."
          },
          ...
        ]
      }
    }
    ```
    </td>
  </tr>
</table>
