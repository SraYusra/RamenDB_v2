<template>
  <div class="upload">
    <h1>File Upload</h1>
    <div class="panel panel-sm">
      <div class="panel-heading"> 
        <h4>CSV Import</h4>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <br>
          <label for="csv_file" class="control-label col-sm-3 text-right">FILE UPLOAD</label>
          <div class="col-sm-9">
            <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
          </div>
        </div>
        <div class="col-sm-offset-3 col-sm-9">
          <div class="checkbox-inline">
            <label for="header_rows"><input type="checkbox" id="header_rows"> File contains header row?</label>
          </div>
        </div>
        
        <div class="col-sm-offset-3 col-sm-9">
          <a href="/" class="btn btn-primary"><button class="app_project_btn">Parse CSV</button></a>
        </div>

        <!-- HERE is where the table will be displayed once CSV is uploaded -->
        <table v-if="parse_csv">
          <thead>
            <tr>
              <th v-for="key in parse_header" :key="key.id"
                  @click="sortBy(key)"
                  :class="{ active: sortKey == key }">
                {{ key | capitalize }}
                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                </span>
              </th>
            </tr>
          </thead> 
          <tr v-for="csv in parse_csv" :key="csv.id">
            <td v-for="key in parse_header" :key="key.id">
              {{csv[key]}}
            </td>
            <td>
              <div class="checkbox-inline">
                <input type="checkbox" id="select">
              </div>
            </td>
          </tr>
          
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      headers: ['Title', 'Description', 'Select'],
      parse_csv: [],
      sortOrders: {},
      sortKey: ''
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON (csv) {
      var vm = this
      var lines = csv.split('\n')
      var result = []
      var headers = lines[0].split(',')
      vm.parse_header = lines[0].split(',')
      lines[0].split(',').forEach(function (key) {
        vm.sortOrders[key] = 1
      })

      lines.map(function (line, indexLine) {
        if (indexLine < 1) return // Jump header line

        var obj = {}
        var currentline = line.split(',')

        headers.map(function (header, indexHeader) {
          obj[header] = currentline[indexHeader]
        })
        result.push(obj)
      })

      result.pop() // remove the last item because undefined values

      // INSTEAD OF RETURN, lets pass result to a new function to filter out the keys to only get ones we need and post them to database
      return result // JavaScript object
    },
    loadCSV (e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader()
        reader.readAsText(e.target.files[0])
        // Handle errors load
        reader.onload = function (event) {
          var csv = event.target.result
          vm.parse_csv = vm.csvJSON(csv)
        }
        reader.onerror = function (evt) {
          if (evt.target.error.name === 'NotReadableError') {
            alert('Canno\'t read file !')
          }
        }
      } else {
        alert('FileReader are not supported in this browser.')
      }
    }
  }
}
</script>

<style scoped>
.upload {
  margin-top: 150px;
}
html, body {
  margin: 0;
  padding: 0;
}
body {
  margin: 32px auto;
}
.panel {
  border: 2px solid #dfdfdf;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 0 0;
  margin: 10px;
  padding: 10px;
} 
.panel.panel-sm {
  width: 60%;
  margin: 10px auto;
  text-align: center;
}
.panel-heading {
  border-bottom: 2px solid #dfdfdf;
}
.panel-heading h1, .panel-heading h2, .panel-heading h3, .panel-heading h4, .panel-heading h5, .panel-heading h6 {
  margin: 0;
  padding: 0;
}
.panel-body .checkbox-inline {
  padding: 15px 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow-x: auto;
  margin-top: 15px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.app_project_btn {
  background: #1590b5;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 60%;
  border: none;
  cursor: pointer;
}
</style>


