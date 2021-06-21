document.write(`

<div class="collapse navbar-collapse navbar-ex1-collapse">
<!-- collapse navbar-collapse navbar-ex1-collapse starts -->
<ul class="nav navbar-nav side-nav">
    <!-- nav navbar-nav side-nav starts -->
    <li>
        <!-- li starts -->
        <a href="getting_started.html"> <i class="fa fa-fw fa-dashboard"></i> Getting Started </a>
    </li>
    <!-- li ends -->
    <li>
        <!-- li starts -->
        <a href="#" data-toggle="collapse" data-target="#software"> <i class="fa fa-fw fa-table"></i> Software Setting <i class="fa fa-fw fa-caret-down"></i> </a>
        <ul id="software" class="collapse">
            <li> <a href="software_update.html">Software Update</a> </li>
            <li> <a href="software_settings.html">Software Settings</a> </li>
            <li> <a href="connection_string_settings.html">Connection String Settings</a> </li>
            <li> <a href="software_info.html">Software Info</a> </li>
        </ul>
    </li>
    <!-- li ends -->
    <li>
        <!-- li starts -->
        <a href="#" data-toggle="collapse" data-target="#developer"> <i class="fa fa-fw fa-pencil"></i> Developer Tab <i class="fa fa-fw fa-caret-down"></i> </a>
        <ul id="developer" class="collapse">
            <li> <a href="software_revision.html">Software Revision</a> </li>
            <li> <a href="developer_level.html">Developer Level Software Upload</a> </li>
            <li> <a href="updater_settings.html">Updater Settings</a> </li>
        </ul>
    </li>
    <!-- li ends -->
    <li>
        <!-- li starts -->
        <a href="#" data-toggle="collapse" data-target="#user"> <i class="fa fa-fw fa-user"></i> Users <i class="fa fa-fw fa-caret-down"></i> </a>
        <ul id="user" class="collapse">
            <li> <a href="user_management.html">Users Management</a> </li>
            <li> <a href="user_privileges.html">User's Privileges</a> </li>
            <li> <a href="change_password.html">Change Password</a> </li>
            <li> <a href="user_chat_line.html">Users Chat Line</a> </li>
        </ul>
    </li>
    <!-- li ends -->
    <li>
        <!-- li starts-->
        <a href="#" data-toggle="collapse" data-target="#wfp"> <i class="fa fa-fw fa-arrows-v"></i> Back End <i class="fa fa-fw fa-caret-down"></i> </a>
        <ul id="wfp" class="collapse">
            <li> <a href="accounts_balances.html">Accounts Balances</a> </li>							
            <li> <a href="wfp_usage.html">WFP Usage</a> </li>							
            <li> <a href="claims_checklist.html">Claims Checklist</a> </li>							
            <li> <a href="checklist_manager.html">Checklist Manager</a> </li>
            <li> <a href="paas_tagging.html">PAAS Tagging</a> </li>
            <li> <a href="signatories.html">Signatories</a> </li>
            <li> <a href="account_code.html">Account Code - HR Code Tagging</a> </li>
        </ul>
    </li>
    <!-- li ends-->
    <li>
        <!-- li starts -->
        <a href="#" data-toggle="collapse" data-target="#transaction"> <i class="fa fa-fw fa-gear"></i> Transaction <i class="fa fa-fw fa-caret-down"></i> </a>
        <ul id="transaction" class="collapse">
            <li> <a href="with_wfp_transaction.html">With WFP Transaction</a> </li>
            <li> <a href="no_wfp_transaction.html">No WFP Transaction</a> </li>
            <li> <a href="manage_transaction.html">Manage Transactions</a> </li>
            <li> <a href="request_payee.html">Request Payee</a> </li>
            <li> <a href="transaction_approval.html">Transaction For Approval</a> </li>
        </ul>
    </li>
    <!-- li ends -->
</ul>
<!-- nav navbar-nav side-nav ends -->
</div>

`);