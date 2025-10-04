# Pie Chart Spacing Methods

## Method 1: Chart.js
```javascript
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Principal', 'Interest'],
        datasets: [{
            data: [82.4, 17.6],
            backgroundColor: ['#FFC107', '#000000'],
            borderWidth: 8,        // Increase this for more spacing
            borderColor: '#ffffff' // White border creates separation
        }]
    },
    options: {
        elements: {
            arc: {
                borderAlign: 'inner', // or 'center'
                borderJoinStyle: 'round'
            }
        }
    }
});
```

## Method 2: D3.js
```javascript
const pie = d3.pie()
    .value(d => d.value)
    .padAngle(0.05);  // Increase this value for more spacing (in radians)

const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
    .cornerRadius(5);  // Optional: rounded corners
```

## Method 3: Plotly.js
```javascript
Plotly.newPlot('myDiv', [{
    values: [82.4, 17.6],
    labels: ['Principal', 'Interest'],
    type: 'pie',
    marker: {
        colors: ['#FFC107', '#000000'],
        line: {
            color: '#FFFFFF',
            width: 4  // Border width creates spacing
        }
    },
    hole: 0.1,  // Optional: creates donut chart
    pull: [0.1, 0.1]  // Pulls segments apart (0.1 = 10% of radius)
}]);
```

## Method 4: ApexCharts
```javascript
var options = {
    series: [82.4, 17.6],
    chart: {
        type: 'pie'
    },
    labels: ['Principal', 'Interest'],
    colors: ['#FFC107', '#000000'],
    stroke: {
        show: true,
        width: 6,        // Border width for spacing
        colors: ['#fff']
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '0%'
            }
        }
    }
};
```

## Method 5: CSS/SVG Transform Approach
```css
.pie-segment {
    transform-origin: center;
    transition: transform 0.3s ease;
}

.pie-segment:nth-child(1) {
    transform: translate(-2px, -2px);
}

.pie-segment:nth-child(2) {
    transform: translate(2px, 2px);
}
```

## Method 6: Manual SVG with Spacing
```svg
<svg width="300" height="300">
    <!-- Principal segment with offset -->
    <g transform="translate(148,148)">
        <path d="..." fill="#FFC107"/>
    </g>
    
    <!-- Interest segment with opposite offset -->
    <g transform="translate(152,152)">
        <path d="..." fill="#000000"/>
    </g>
</svg>
```

## Method 7: Canvas with Manual Drawing
```javascript
function drawPieSegment(ctx, centerX, centerY, radius, startAngle, endAngle, color, offset = 0) {
    // Calculate offset position
    const midAngle = (startAngle + endAngle) / 2;
    const offsetX = Math.cos(midAngle) * offset;
    const offsetY = Math.sin(midAngle) * offset;
    
    ctx.beginPath();
    ctx.moveTo(centerX + offsetX, centerY + offsetY);
    ctx.arc(centerX + offsetX, centerY + offsetY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// Usage
drawPieSegment(ctx, 150, 150, 100, 0, Math.PI * 1.648, '#FFC107', 3);
drawPieSegment(ctx, 150, 150, 100, Math.PI * 1.648, Math.PI * 2, '#000000', 3);
```

## Key Parameters to Adjust:

### Border-based spacing:
- **borderWidth**: 3-10px (larger = more spacing)
- **borderColor**: Usually white or transparent

### Angle-based spacing:
- **padAngle**: 0.01-0.1 radians (D3.js)
- **pull**: 0.05-0.2 (Plotly - fraction of radius)

### Transform-based spacing:
- **translate**: 2-10px in desired direction
- **transform-origin**: Usually 'center'

Choose the method that matches your current charting library or implementation approach.