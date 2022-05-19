import{isValidPhoneNumber}from'libphonenumber-js';import * as Yup from'yup';let d=a=>{const b=2===(null==a?void 0:a.length);return"string"===typeof a&&b};Yup.addMethod(Yup.string,"phone",function(a,b=""){d(a)||(a="US");return this.test("phone","string"===typeof b&&b?b:`\${path} must be a valid phone number for region ${a}`,c=>{try{return void 0===c||""===c?!0:isValidPhoneNumber(c,a)}catch{return!1}})})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVwLXBob25lLWxpdGUuZXNtLmpzIiwic291cmNlcyI6WyIuLi9zcmMveXVwLXBob25lLWxpdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XG5pbXBvcnQgeyBDb3VudHJ5Q29kZSB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzL3R5cGVzJztcblxuZGVjbGFyZSBtb2R1bGUgJ3l1cCcge1xuICBleHBvcnQgaW50ZXJmYWNlIFN0cmluZ1NjaGVtYSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIHBob25lIG51bWJlciB2YWxpZGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY291bnRyeUNvZGU9VVNdIFRoZSBjb3VudHJ5IGNvZGUgdG8gY2hlY2sgYWdhaW5zdC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vycm9yTWVzc2FnZT1ERUZBVUxUX01FU1NBR0VdIHJldHVybnMgZXJyb3IgaWYgZmFpbGVkIHZhbGlkYXRpb25cbiAgICAgKi9cbiAgICBwaG9uZShjb3VudHJ5Q29kZT86IENvdW50cnlDb2RlLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpOiBTdHJpbmdTY2hlbWE7XG4gIH1cbn1cblxuY29uc3QgWVVQX1BIT05FX01FVEhPRCA9ICdwaG9uZSc7XG5jb25zdCBDTERSX1JFR0lPTl9DT0RFX1NJWkUgPSAyO1xuXG5jb25zdCBpc1ZhbGlkQ291bnRyeUNvZGUgPSAoY291bnRyeUNvZGU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBjb3VudHJ5Q29kZSA9PT0gJ3N0cmluZyc7XG4gIGNvbnN0IGlzVmFsaWRDb2RlTGVuZ3RoID0gY291bnRyeUNvZGU/Lmxlbmd0aCA9PT0gQ0xEUl9SRUdJT05fQ09ERV9TSVpFO1xuXG4gIHJldHVybiBpc1N0cmluZyAmJiBpc1ZhbGlkQ29kZUxlbmd0aDtcbn07XG5cbll1cC5hZGRNZXRob2QoXG4gIFl1cC5zdHJpbmcsXG4gIFlVUF9QSE9ORV9NRVRIT0QsXG4gIGZ1bmN0aW9uIHl1cFBob25lTGl0ZShjb3VudHJ5Q29kZT86IENvdW50cnlDb2RlLCBlcnJvck1lc3NhZ2UgPSAnJykge1xuICAgIGlmICghaXNWYWxpZENvdW50cnlDb2RlKGNvdW50cnlDb2RlKSkge1xuICAgICAgLy8gaWYgbm90IHZhbGlkIGNvdW50cnlDb2RlLCB0aGVuIHNldCBkZWZhdWx0IGNvdW50cnkgdG8gVW5pdGVkIFN0YXRlcyAoVVMpXG4gICAgICBjb3VudHJ5Q29kZSA9ICdVUyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyTXNnID1cbiAgICAgIHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIGVycm9yTWVzc2FnZVxuICAgICAgICA/IGVycm9yTWVzc2FnZVxuICAgICAgICA6IGBcXCR7cGF0aH0gbXVzdCBiZSBhIHZhbGlkIHBob25lIG51bWJlciBmb3IgcmVnaW9uICR7Y291bnRyeUNvZGV9YDtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdGhpcy50ZXN0KFlVUF9QSE9ORV9NRVRIT0QsIGVyck1zZywgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogY2hlY2sgaWYgdGhlIGNvdW50cnlDb2RlIHByb3ZpZGVkIHNob3VsZCBiZSB1c2VkIGFzXG4gICAgICAgICAgZGVmYXVsdCBjb3VudHJ5IGNvZGUgb3Igc3RyaWN0bHkgZm9sbG93ZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQaG9uZU51bWJlcih2YWx1ZSwgY291bnRyeUNvZGUpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJpc1ZhbGlkQ291bnRyeUNvZGUiLCJjb3VudHJ5Q29kZSIsImlzVmFsaWRDb2RlTGVuZ3RoIiwiQ0xEUl9SRUdJT05fQ09ERV9TSVpFIiwibGVuZ3RoIiwiWXVwIiwiYWRkTWV0aG9kIiwic3RyaW5nIiwiWVVQX1BIT05FX01FVEhPRCIsInl1cFBob25lTGl0ZSIsImVycm9yTWVzc2FnZSIsInRlc3QiLCJlcnJNc2ciLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImlzVmFsaWRQaG9uZU51bWJlciJdLCJtYXBwaW5ncyI6ImFBbUJBLElBQU1BLEVBQXNCQyxDQUFBQSxFQUE0QyxDQUV0RSxNQUFNQyxFQUpzQkMsQ0FJdEJELElBQStCLElBQUEsRUFBQUQsQ0FBQSxPQUFBLEVBQUVHLENBQUFBLE1BQWpDRixDQUVOLE9BSHdDLFFBR3hDLEdBSGlCLE1BQU9ELEVBR3hCLEVBQW1CQyxDQUptRCxDQU94RUcsSUFBSUMsQ0FBQUEsU0FBSkQsQ0FDRUEsR0FBSUUsQ0FBQUEsTUFETkYsQ0FWeUJHLE9BVXpCSCxDQUdFSSxRQUFBLENBQXNCUixDQUF0QixDQUFpRFMsQ0FBQUEsQ0FBZSxFQUFoRSxDQUFrRSxDQUMzRFYsQ0FBQUEsQ0FBbUJDLENBQW5CRCxDQUFMLEdBRUVDLENBRkYsQ0FFZ0IsSUFGaEIsQ0FXQSxPQUFPLEtBQUtVLENBQUFBLElBQUwsQ0F6QmNILE9BeUJkLENBTEwsUUFEVUksR0FBQSxRQUFBQSxFQUMwQkYsQ0FEMUJFLENBRU5GLENBRk1FLHFEQUdOWCxHQUdDLENBQXFDWSxDQUFBQSxFQUFpQixDQUMzRCxHQUFJLENBQ0YsTUFBY0MsS0FBQUEsRUFBZCxHQUFJRCxDQUFKLEVBQXFDLEVBQXJDLEdBQTJCQSxDQUEzQixDQUNTLENBQUEsQ0FEVCxDQU9PRSxrQkFBQUEsQ0FBbUJGLENBQW5CRSxDQUEwQmQsQ0FBMUJjLENBUkwsQ0FTRixLQUFNLENBQ04sTUFBTyxDQUFBLENBREQsQ0FWbUQsQ0FBdEQsQ0FaeUQsQ0FIcEVWOyJ9
