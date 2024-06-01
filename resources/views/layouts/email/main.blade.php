<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<head>
    <meta name="viewport" content="width=device-width"/>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

    <meta
        content=""
        name="description"/>

    <meta content="{{ config('app.name') }}" name="author"/>

    <title>{{ config('app.name') }}</title>

    <style type="text/css">
        img {
            max-width: 100%;
        }

        body {
            padding: 0 !important;
            margin: 0 !important;
            font-size: 18px;
        }

        .action-button {
            cursor: pointer;
            display: inline-block;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            min-width: 356px;
            background: #244FBE;
            color: #ffffff;
            padding: 20px 32px;
            border-radius: 10px;
            text-decoration: none;
        }

        .action-otp {
            display: inline-block;
            min-width: 356px;
            background: rgb(240 235 253 / 30%);
            padding: 20px 32px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 40px;
            line-height: 52px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #244FBE;
        }

        a {
            overflow-wrap: anywhere;
        }

        h1 {
            font-size: 28px;
            font-weight: 600 !important;
            margin: 20px 0 5px !important;
            line-height: 40px;
        }

        h2 {
            font-size: 18px !important;
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
        }

        h3 {
            font-size: 16px !important;
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
        }

        h4 {
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
        }

        ul, ol {
            padding-left: 24px;
        }

        li {
            padding-left: 4px;
        }

        td > p:first-child {
            margin-top: 0;
        }

        td > p:last-child {
            margin-bottom: 0;
        }

        @media screen and (max-width: 465px) {
            .content {
                padding: 18px 10px 0 !important;
            }

            .main {
                padding: 20px 10px !important;
            }

            tr:not(:last-child) > td {
                padding-bottom: 20px !important;
            }
        }
    </style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage"
      style="font-family: 'Trebuchet MS', sans-serif;
            margin: 0 !important;
            padding:0 !important;
            box-sizing:border-box !important;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            height: 100%;
            line-height: 1.6em;
            background-image: url('./assets/background.png');
            background-position: top center;
            background-repeat: repeat-x;
            background-color: rgba(240, 235, 253, 0.26);
            backdrop-filter: blur(2px);"
      bgcolor="#ffffff">

<div class="content"
     style="font-family: 'Trebuchet MS', sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            max-width: 600px;
            display: block;
            margin: 0 auto;
            padding: 60px 20px 0;">

    <table width="100%"
           cellpadding="0"
           cellspacing="0"
           style="font-family: 'Trebuchet MS', sans-serif;
                box-sizing: border-box;
                margin: 0;">

        <tr>
            <td style="padding-bottom: 0!important;">
                <table class="main"
                       width="100%"
                       cellpadding="0"
                       cellspacing="0"
                       style="font-family: 'Trebuchet MS', sans-serif;
                       box-sizing: border-box;
                       font-size: 16px;
                       background-color: #fff;
                       box-shadow: 2px 6px 40px rgba(0, 0, 0, 0.04);
                       padding: 30px;
                       border-radius: 10px;
                       margin: 0;">

                    <tr style="font-family: 'Trebuchet MS', sans-serif;
                               box-sizing: border-box;
                               margin: 0;">
                        <td style="padding-bottom: 50px;" align="center">
                            <!-- begin header -->
                            <a href="javascript:void(0)" style="text-decoration:none; color:#372AA4">
                                <img src="{{ asset('assets/img/logo192.png') }}" alt="{{ config('app.name') }}" width="100px"/>
                            </a>
                            <h1 style="text-align: center; color: #2F2F2F;">@yield('header')</h1>
                            <!-- end header -->
                        </td>
                    </tr>

                    <tr style="font-family: 'Trebuchet MS', sans-serif;
                               box-sizing: border-box;
                               font-weight: 400;
                               font-size: 18px;
                               line-height: 32px;
                               color: #6C757D;
                               margin: 0;"
                        valign="top">
                        <td style="padding-bottom: 50px;">
                            <!-- begin content -->
                            @yield('content')
                            <!-- end content -->
                        </td>
                    </tr>

                    <tr>
                        <td class="alert alert-warning"
                            style="font-family: 'Trebuchet MS', sans-serif;
                            box-sizing: border-box;
                            font-size: 16px;
                            vertical-align: top;
                            color: #6C757D;
                            font-weight: 400;
                            text-align: left;
                            line-height: 28px;
                            margin: 0;"
                            align="center"
                            valign="top">
                           @yield('disclaimer')
                        </td>
                    </tr>

                </table>
            </td>
        </tr>

        <tr>
            <td class="alert alert-warning"
                style="font-family: 'Trebuchet MS', sans-serif;
                box-sizing: border-box;
                vertical-align: top;
                text-align: center;
                margin: 0;
                color: #6C757D;
                font-size: 10px;
                line-height: 13px;
                padding: 50px 30px;"
                align="center"
                valign="top">
                <!-- begin footer -->
                @include('layouts.email.components.footer')
                <!-- end footer -->
            </td>
        </tr>
    </table>
</div>
</body>
</html>
