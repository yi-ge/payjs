<?php
$key = '';
$arr = [
    'body' => '合同:小黄人测试',
    'attach' => '合同:小黄人测试',
    'total_fee' => 1,
    'out_trade_no' => 'FF6F8FB0114D4FAFA3B562BD89B897E8',
    'openid' => 'o7LFAwaFdmKH217MddWDDyYuv7Ms',
    'mchid' => '1519390541',
];

ksort($arr);
$sign = strtoupper(md5(urldecode(http_build_query($arr)) . '&key=' . $key));

echo 'https://payjs.cn/api/jsapi?' . urldecode(http_build_query($arr)) . '&sign=' . $sign;
